import BaseRestService from "../../../common/service/BaseRestService";

class SupplierListService extends BaseRestService {
  getSupplierList() {
    return super.get("/supplier");
  }
}

export default SupplierListService;
