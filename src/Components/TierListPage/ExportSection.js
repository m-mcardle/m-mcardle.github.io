function ExportSection({exportTiers, doDownload, doUpload, url}) {
  return (
    <div className="m-5 w-screen md:mx-52">
      <button className="border-2 p-1" onClick={exportTiers}>
        Save Tier List
      </button>
      <button className={`border-2 p-1 mx-5 ${!url ? "text-gray-400" : undefined}`} onClick={doDownload}>
        Download
      </button>
      <button className="border-2 p-1" onClick={doUpload}>
        Upload
      </button>
    </div>
  );
}

export default ExportSection;
