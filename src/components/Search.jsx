var Search = (props) => {

  

  var keyEventHandler = (event) => {
    // console.log(event.target.value);

    // var debounceCallBack = () => {
    //   props.handleSearchInput(event.target.value);
    // };

    props.handleSearchInput(event.target.value);

    // debounceCallBack(event.target.value);
  };

  return (
    <div className="search-bar form-inline">
      <input onChange={keyEventHandler} className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
