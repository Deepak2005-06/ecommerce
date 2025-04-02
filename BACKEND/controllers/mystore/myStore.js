import StoreDetails from "../../models/Dealer/dealerStore.model.js"; // Ensure correct path

const getDealerStore = async (req, res) => {
  try {
    console.log("Querying collection:", StoreDetails.collection.collectionName);
    const store = await StoreDetails.findOne().lean();
    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }
    res.status(200).json(store);
  } catch (error) {
    console.error("❌ Error fetching store details:", error.message);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

const updateStoreDetails = async (req, res) => {
  try {
    const updateData = req.body;
    const updatedStore = await StoreDetails.findOneAndUpdate(
      {},
      { $set: updateData },
      { new: true, runValidators: true }
    );
    if (!updatedStore) {
      return res.status(404).json({ message: "Store not found" });
    }
    res.status(200).json({ message: "Store details updated successfully", updatedStore });
  } catch (error) {
    res.status(500).json({ message: "Error updating store details", error: error.message });
  }
};

export { updateStoreDetails, getDealerStore };