import { observable, action } from "mobx";

class TestStore {
  breadcrumb = observable({
    size: 'middle',
  });

  @action.bound
  setBreadcrumbSize(val) {
    this.breadcrumb.size = val;
  }
};

export default new TestStore();
