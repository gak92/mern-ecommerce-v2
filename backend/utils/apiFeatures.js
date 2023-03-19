class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword ? {
      name: {
        $regex: this.queryStr.keyword,
        $options: "i",
      },
    } : {};

    console.log(keyword);
    this.query = this.query.find({...keyword});
    return this;
  }

  filter() {
    const queryStrCopy = {...this.queryStr};
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach(key => delete queryStrCopy[key]);

    // Filter for price and rating
    let queryString = JSON.stringify(queryStrCopy);
    queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);

    this.query = this.query.find(JSON.parse(queryString));
    return this;
  }
}

module.exports = ApiFeatures;
