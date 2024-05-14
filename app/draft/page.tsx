import React from "react";

/**
 * Page for feeding quiz questions / tasks
 * Parallel validation of questions / tasks
 * Setting time durations for the questions / tasks
 * Modifying questions / tasks
 * Persisting the questions & tasks somewhere
 * Building board preview
 */

// TODO: left panel for listing questions like files in vscode, qns are files, catergories are folders, right side for editing the properties of the question or catergory

const Draft = () => {
  return (
    <div className="draft-wrapper">
      <div className="draft-left-pane">
        {/* folder structure view where
            catergories : folders : : qns : files
             */}
      </div>
      <div className="draft-right-pane">
        {/* all editing and managing panes for the selected category or qns */}
      </div>
    </div>
  );
};

export default Draft;
