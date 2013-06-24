timing_test(function() {
  at(0, function() {
    assert_styles('.anim', {'left':'100px'});
  }, "Autogenerated test at t=0");
  at(0.25, function() {
    assert_styles('.anim', {'left':'200px'});
  }, "Autogenerated test at t=0.25");
  at(0.5, function() {
    assert_styles('.anim', {'left':'300px'});
  }, "Autogenerated test at t=0.5");
  at(0.75, function() {
    assert_styles('.anim', {'left':'400px'});
  }, "Autogenerated test at t=0.75");
  at(1, function() {
    assert_styles('.anim', {'left':'500px'});
  }, "Autogenerated test at t=1");
  at(1.25, function() {
    assert_styles('.anim', {'left':'400px'});
  }, "Autogenerated test at t=1.25");
  at(1.5, function() {
    assert_styles('.anim', {'left':'300px'});
  }, "Autogenerated test at t=1.5");
  at(1.75, function() {
    assert_styles('.anim', {'left':'200px'});
  }, "Autogenerated test at t=1.75");
  at(2, function() {
    assert_styles('.anim', {'left':'100px'});
  }, "Autogenerated test at t=2");
  at(2.25, function() {
    assert_styles('.anim', {'left':'200px'});
  }, "Autogenerated test at t=2.25");
  at(2.5, function() {
    assert_styles('.anim', {'left':'300px'});
  }, "Autogenerated test at t=2.5");
  at(2.75, function() {
    assert_styles('.anim', {'left':'400px'});
  }, "Autogenerated test at t=2.75");
  at(3.0, function() {
    assert_styles('.anim', {'left':'500px'});
  }, "Autogenerated test at t=3.0");
  at(4.0, function() {
    assert_styles('.anim', {'left':'500px'});
  }, "Autogenerated test at t=4.0");
}, "Autogenerated checks.");