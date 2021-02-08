import BaseRestService from "../../../common/service/BaseRestService";

class SupplierDetailService extends BaseRestService {
  getSupplier(id) {
    return super.get(`/supplier/${id}`);
  }

  postScore(id, score) {
    return super.post(`/supplier/${id}`, {
      body: {
        score,
      },
    });
  }
}

export default SupplierDetailService;
