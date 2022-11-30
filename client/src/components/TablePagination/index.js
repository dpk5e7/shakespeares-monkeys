import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const TablePagination = ({ currentPage, rowsPerPage, totalRows, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  let previousButton = "";
  if (currentPage > 1) {
    previousButton = (
      <Menu.Item as="a" icon onClick={() => paginate(currentPage - 1)}>
        <Icon name="chevron left" />
      </Menu.Item>
    );
  }

  let nextButton = "";
  if (currentPage < pageNumbers.length) {
    nextButton = (
      <Menu.Item as="a" icon onClick={() => paginate(currentPage + 1)}>
        <Icon name="chevron right" />
      </Menu.Item>
    );
  }

  return (
    <Menu floated="right" pagination>
      {previousButton}

      {pageNumbers.map((number) => {
        if (number === currentPage) {
          return (
            <Menu.Item
              key={number}
              as="a"
              onClick={() => paginate(number)}
              active
            >
              {number}
            </Menu.Item>
          );
        } else {
          return (
            <Menu.Item key={number} as="a" onClick={() => paginate(number)}>
              {number}
            </Menu.Item>
          );
        }
      })}

      {nextButton}
    </Menu>
  );
};

export default TablePagination;
