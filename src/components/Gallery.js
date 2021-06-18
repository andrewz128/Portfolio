import React, { Component } from "react";
import ImgsViewer from "react-images-viewer";
import { css, StyleSheet } from "aphrodite/no-important";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      currImg: 0,
    };

    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrev = this.gotoPrev.bind(this);
    this.gotoImg = this.gotoImg.bind(this);
    this.handleClickImg = this.handleClickImg.bind(this);
    this.closeImgsViewer = this.closeImgsViewer.bind(this);
    this.openImgsViewer = this.openImgsViewer.bind(this);
  }
  openImgsViewer(index, event) {
    event.preventDefault();
    this.setState({
      currImg: index,
      isOpen: true,
    });
  }
  closeImgsViewer() {
    this.setState({
      currImg: 0,
      isOpen: false,
    });
  }
  gotoPrev() {
    this.setState({
      currImg: this.state.currImg - 1,
    });
  }
  gotoNext() {
    this.setState({
      currImg: this.state.currImg + 1,
    });
  }
  gotoImg(index) {
    this.setState({
      currImg: index,
    });
  }
  handleClickImg() {
    if (this.state.currImg === this.props.imgs.length - 1) return;
    this.gotoNext();
  }
  renderGallery() {
    const { imgs } = this.props;

    if (!imgs) return;

    const gallery = imgs.map((obj, i) => {
      return (
        <a
          href={obj.src}
          className={css(classes.thumbnail)}
          key={i}
          onClick={(e) => this.openImgsViewer(i, e)}
        >
          <img src={obj.src} className="portImage" />
        </a>
      );
    });

    return <div className="portImage">{gallery}</div>;
  }
  render() {
    return (
      <div>
        {this.renderGallery()}
        <ImgsViewer
          backdropCloseable
          currImg={this.state.currImg}
          imgs={this.props.imgs}
          isOpen={this.state.isOpen}
          onClickImg={this.handleClickImg}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrev}
          onClickThumbnail={this.gotoImg}
          onClose={this.closeImgsViewer}
        />
      </div>
    );
  }
}

const gutter = {
  small: 2,
  large: 4,
};
const classes = StyleSheet.create({
  gallery: {
    marginRight: -gutter.small,
    overflow: "hidden",
    "@media (min-width: 500px)": {
      marginRight: -gutter.large,
    },
  },

  thumbnail: {
    width: "30%",
    "@media screen and (max-width: 1300px) and (min-width: 1000px)": {
      width: "48%",
    },
    "@media screen and (max-width: 1000px)": {
      width: "100%",
    },
  },

  // orientation
  landscape: {
    width: "30%",
  },
  square: {
    paddingBottom: gutter.large,
    width: "40%",

    "@media (min-width: 500px)": {
      paddingBottom: gutter.large,
    },
  },
});

export default Gallery;
