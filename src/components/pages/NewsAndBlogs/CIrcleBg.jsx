import React from "react";

const Circle = () => {
  return <div className="w-4 h-4 rounded-full bottom-9 bg-[#ac948062]"></div>;
};

const CircleBg = () => {
  const renderRow = count => {
    const circles = [];
    for (let i = 0; i < count; i++) {
      circles.push(<Circle key={i} />);
    }
    return circles;
  };

  const renderCircles = () => {
    const rows = [];
    for (let i = 0; i < 5; i++) {
      rows.push(
        <div key={i} className="flex gap-4 mt-3">
          {renderRow(5)}
        </div>
      );
    }
    return rows;
  };

  return <section>{renderCircles()} </section>;
};

export default CircleBg;
