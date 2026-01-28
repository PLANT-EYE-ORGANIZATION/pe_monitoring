import "./GlassIcons.css";

const GlassIcons = ({ items, className }: any) => {
  return (
    <div
      className={`p-0 grid grid-cols-5 gap-x-6 gap-y-14 icon-btns ${className || ""}`}
    >
      {items.map((item: any, index: number) => (
        <button
          key={index}
          className={`icon-btn ${item.customClass || ""}`}
          aria-label={item.label}
          type="button"
        >
          <span className="icon-btn__back"></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
