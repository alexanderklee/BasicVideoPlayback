import React from "react";
import { Player } from "bitmovin-player";
import { UIFactory } from "bitmovin-player/bitmovinplayer-ui";
import "bitmovin-player/bitmovinplayer-ui.css";

class BitmovinPlayer extends React.Component {
  state = {
    player: null
  };

  playerConfig = {
    key: "9efcb9df-29dc-482f-81a4-f587aa70e27f"
  };

  playerSource = {
    hls:
      "https://stream.mux.com/Wv1rKxiJqdkDdtDxc4k7yczGwk7FEhqKf78tloSHPWo.m3u8",
    poster:
      "https://image.mux.com/Wv1rKxiJqdkDdtDxc4k7yczGwk7FEhqKf78tloSHPWo/thumbnail.png"
  };

  constructor(props) {
    super(props);
    this.playerDiv = React.createRef();
  }

  componentDidMount() {
    this.setupPlayer();
  }

  componentWillUnmount() {
    this.destroyPlayer();
  }

  setupPlayer() {
    const player = new Player(this.playerDiv.current, this.playerConfig);
    UIFactory.buildDefaultUI(player);
    player.load(this.playerSource).then(
      () => {
        this.setState({
          ...this.state,
          player
        });
        console.log("Successfully loaded source");
      },
      () => {
        console.log("Error while loading source");
      }
    );
  }

  destroyPlayer() {
    if (this.state.player != null) {
      this.state.player.destroy();
      this.setState({
        ...this.state,
        player: null
      });
    }
  }

  render() {
    return <div id="player" ref={this.playerDiv} />;
  }
}

export default BitmovinPlayer;
