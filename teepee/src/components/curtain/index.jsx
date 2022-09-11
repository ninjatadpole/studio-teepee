import React, { Component } from "react";
import classnames from "classnames";

function showCurtain() {
  window.setTimeout(() => {
    document.body.className = classnames(
      document.body.className,
      "show-curtain"
    );
  }, 1000);
}

class CurtainModal extends Component {
  componentDidMount = () => {
    if (document.readyState !== "loading") {
      showCurtain();
    } else {
      window.addEventListener("load", showCurtain, {
        capture: false,
        once: true,
        passive: true,
      });
    }
  };

  render() {
    return (
      <section className="curtain-modal">
        <article className="modal">
          <div className="modal-contents">
            <i className="illustration" />
            <div className="copy">
              <h1>We've moved!</h1>
              <p>Studio TeePee has become:</p>
              <p className="cocoon-brand">COCOON architects</p>
              <p>
                Please click the following link to see the exciting homes we’ve
                been creating
              </p>
              <a
                href="https://logicdemosite.co.uk/cocoon/"
                className="cocoon-link"
                title="Visit the COCOON architects site"
              >
                <span className="offset">COCOON</span>
              </a>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

CurtainModal.propTypes = {};

export default CurtainModal;
