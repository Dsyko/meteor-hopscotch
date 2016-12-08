//Tests
Tinytest.add('Hopscotch initalized', function (test) {
  test.isNotNull(hopscotch, 'hopscotch should exist');
  test.isTrue(typeof(hopscotch.startTour) === "function", 'startTour should be a function');
});
