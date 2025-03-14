import "./Tooltip.css";

const Tooltip = ({ text, children }: { text: string, children: any }) => {

  return (
    <div className="tooltip-container">
  <button className="tooltip-trigger">{children}</button>
  <span className="tooltip-text">{text}</span>
</div>)

};

export default Tooltip;