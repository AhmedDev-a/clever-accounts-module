
import * as z from "zod";

export const customerRequirementsSchema = z.object({
  customerName: z.string().min(2, "اسم العميل مطلوب"),
  customerType: z.string(),
  businessType: z.string(),
  expectedBudget: z.string(),
  requiredServices: z.string(),
  specialRequirements: z.string(),
  preferredTiming: z.string(),
  contactMethod: z.string(),
});

export type CustomerRequirementsFormData = z.infer<typeof customerRequirementsSchema>;
