import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const NoItem = (props) => {

  if (!props.searchTitle) {
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }
  
  return (
    
    <div
      id="empty"
      className="card bg-dark border-light p-3"
      style={{ borderRadius: "20px" }}
    >
      No items found for <span className="search-title" >{props.searchTitle}</span>
    </div>
  );  
  
}

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    return <NoItem searchTitle={props.searchTitle} />
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
