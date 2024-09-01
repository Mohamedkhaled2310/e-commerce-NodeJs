module.exports = class ModelGeneric {
  #Model;
  constructor(model) {
    this.#Model = model;
  }
  async getAll(filters = {}) {
    return await this.#Model.find(filters);
  }

  async getById(id) {
    return await this.#Model.findById(id);
  }

  async create(data) {
    const instance = new this.#Model(data); //runtime
    return await instance.save();
  }

  async update(id, data) {
    return await this.#Model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await this.#Model.findByIdAndDelete(id);
  }
};
