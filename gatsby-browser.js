window.prevLocation = '/';

exports.onRouteUpdate = ({ location, prevLocation }) => {
    window.prevLocation = prevLocation ? prevLocation.pathname : '/';
}