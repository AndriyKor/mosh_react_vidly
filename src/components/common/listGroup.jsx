import React from "react";

const ListGroup = ({
  items,
  valueProperty,
  textProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {items.map(item => {
        const classList = "list-group-item".concat(
          item === selectedItem ? " active" : ""
        );
        return (
          <li
            key={item[valueProperty]}
            className={classList}
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default ListGroup;
