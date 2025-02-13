import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

interface PricingDetail {
  item: string;
  price: number;
}

const PricingForm: React.FC = () => {
  const [clientName, setClientName] = useState<string>("");
  const [requirements, setRequirements] = useState<string>("");
  const [pricingDetails, setPricingDetails] = useState<PricingDetail[]>([{ item: "", price: 0 }]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "clientName") {
      setClientName(value);
    } else if (name === "requirements") {
      setRequirements(value);
    }
  };

  const handlePricingChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newPricingDetails = [...pricingDetails];
    if (name === "price") {
      newPricingDetails[index].price = parseFloat(value);
    } else {
      newPricingDetails[index].item = value;
    }
    setPricingDetails(newPricingDetails);
  };

  const addPricingDetail = () => {
    setPricingDetails([...pricingDetails, { item: "", price: 0 }]);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 }) as any[];

        const newPricingDetails = jsonData.slice(1).map(row => ({
          item: row[0] || "",
          price: row[1] || 0
        }));

        setPricingDetails(newPricingDetails);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/pricing", {
        clientName,
        requirements,
        pricingDetails,
      });
      alert("تم حفظ التسعير بنجاح");
    } catch (error) {
      console.error("Error saving pricing details:", error);
      alert("حدث خطأ أثناء حفظ التسعير");
    }
  };

  return (
    <div>
      <h1>فورم التسعير</h1>
      <form onSubmit={handleSubmit}>
        <label>
          اسم العميل:
          <input
            type="text"
            name="clientName"
            value={clientName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          متطلبات العميل:
          <textarea
            name="requirements"
            value={requirements}
            onChange={handleInputChange}
            rows={5}
            cols={50}
          />
        </label>
        <br />
        <label>
          تحميل ملف التسعير:
          <input
            type="file"
            accept=".xlsx"
            onChange={handleFileUpload}
          />
        </label>
        <br />
        <h2>تفاصيل التسعير</h2>
        {pricingDetails.map((detail, index) => (
          <div key={index}>
            <label>
              البند:
              <input
                type="text"
                name="item"
                value={detail.item}
                onChange={(e) => handlePricingChange(index, e)}
              />
            </label>
            <label>
              السعر:
              <input
                type="number"
                name="price"
                value={detail.price}
                onChange={(e) => handlePricingChange(index, e)}
              />
            </label>
            <br />
          </div>
        ))}
        <button type="button" onClick={addPricingDetail}>
          إضافة بند جديد
        </button>
        <br />
        <button type="submit">حفظ التسعير</button>
      </form>
    </div>
  );
};

export default PricingForm;