import "./filters";
import { markdown } from "markdown";

describe('markdown filter', function() {

  beforeEach(window.module("app.filters"));

  it('should convert to markdown', inject(function(markdownFilter, $sce) {
    expect($sce.getTrustedHtml(markdownFilter('**Foo** _bar_'))).to.equal('<p><strong>Foo</strong> <em>bar</em></p>');
  }));
});
