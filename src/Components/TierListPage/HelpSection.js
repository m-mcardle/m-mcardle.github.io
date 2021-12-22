function HelpSection() {
  return (
    <div className="flex flex-col bg-gray-600 mx-52 opacity-25">
      <p className="my-1">Drag and drop the pictures to where you rank them</p>
      <p className="my-1">Select the tier list to do using the sidebar</p>
      <p className="my-1">Click on individual pieces on the board to reset them, or refresh to reset page</p>
      <p className="my-1">Click on <b>View my rankings</b> to see how I ranked things</p>
      <p className="my-1">To export a tier list, make your selections then press <b>Save Tier List</b> and then <b>Download</b></p>
      <p className="my-1">To import a tier list, click on <b>Upload</b> and then select an exported JSON file</p>
    </div>
  );
}

export default HelpSection;
