import React from "react";

function BulkAction() {
  return (
    <div className="bulk-action-wrap">
      <div className="bulk-action-inner tdl-flex tdl-flex--justify-space-between tdl-flex--align-center">
        <p>Bulk Action:</p>
        <div className="btn-group">
          <button type="submit" className="btn-style--blue">
            Done
          </button>
          <button type="submit" className="btn-style--red">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default BulkAction;
