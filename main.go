package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

type PricingDetail struct {
	Item  string  `json:"item"`
	Price float64 `json:"price"`
}

type PricingRequest struct {
	ClientName     string         `json:"clientName"`
	Requirements   string         `json:"requirements"`
	PricingDetails []PricingDetail `json:"pricingDetails"`
}

func savePricing(w http.ResponseWriter, r *http.Request) {
	var pricingRequest PricingRequest
	if err := json.NewDecoder(r.Body).Decode(&pricingRequest); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Save pricingRequest to database (implementation not shown)

	w.WriteHeader(http.StatusOK)
}

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	r := mux.NewRouter()
	r.HandleFunc("/api/pricing", savePricing).Methods("POST")

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server running on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}