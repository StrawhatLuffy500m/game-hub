import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrders: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrders }: Props) => {
  const sortOrder = [
    { value: "", label: "Revelance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currSortOrder = sortOrder.find((order) => order.value === sortOrders);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Order by: {currSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
