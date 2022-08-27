export const taxes = {
  Washington: {
    "Income Tax": "0",
    "Sales Tax": "6.5",
    "Property Tax": "0.93",
  },
  Oregon: {
    "Income Tax": "8",
    "Sales Tax": "0",
    "Property Tax": "0.9",
  },
  California: {
    "Income Tax": "8",
    "Sales Tax": "7.25",
    "Property Tax": "1.07",
  },
};

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(taxes);
  }
}
