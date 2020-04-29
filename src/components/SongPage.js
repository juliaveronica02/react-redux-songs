import React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";

const SongPage = props => {
  console.log(props.dataSong);
  return (
    <Container>
      <h1> SONGS </h1>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Song Name</th>
            <th scope="col">Album</th>
            <th scope="col">Artist</th>
          </tr>
        </thead>
        <tbody>
          {props.dataSong.map((item, index) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.album}</td>
                <td>{item.artist}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <thead>
          <td />
          <td />
          <td />
        </thead>
        <tbody />
      </table>
    </Container>
  );
};

const mapStateToProps = state => {
  return { dataSong: state.song.data };
};

export default connect(mapStateToProps)(SongPage);
