global.requestAnimationFrame = (cb) => {
  cb();
};