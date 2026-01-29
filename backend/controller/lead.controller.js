import Lead from "../models/lead.js";

export const createLead = async (req, res) => {
  try {
    const { saleName, status, amount, stage, nextActivityDate } = req.body;

    if (!saleName || typeof saleName !== "string") {
      return res.status(400).json({ message: "Valid sale name is required" });
    }

    if (Number.isNaN(Number(amount)) || Number(amount) <= 0) {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }

    if (typeof stage !== "number" || stage < 0 || stage > 100) {
      return res
        .status(400)
        .json({ message: "Stage must be between 0 and 100" });
    }

    const validStatuses = ["Open", "Lost", "Sold", "Stalled"];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    if (isNaN(Date.parse(nextActivityDate))) {
      return res.status(400).json({ message: "Invalid next activity date" });
    }

    const lead = await Lead.create({
      saleName,
      status,
      amount: Number(amount),
      stage,
      nextActivityDate,
    });

    res.status(201).json({
      message: "Lead created successfully",
      data: lead,
    });
  } catch (error) {
    console.error("Create lead error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getLeads = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const [leads, total] = await Promise.all([
      Lead.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Lead.countDocuments(),
    ]);

    res.status(200).json({
      data: leads,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get leads error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
