export default function Skillbar({skill = '100%'}) {
  return (
    <div className="progress-bar h-fit my-auto">
      <div className={`progress-bar-fill`} style={{width: skill}}/>
    </div>
  );
};
