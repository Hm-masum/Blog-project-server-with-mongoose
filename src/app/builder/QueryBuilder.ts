import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const search = this?.query?.search;

    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: search, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }

  filter() {
    const filter = this?.query?.filter;

    if (filter) {
      this.modelQuery = this.modelQuery.find({ author: filter });
    }

    return this;
  }

  sort() {
    const sortBy = this?.query?.sortBy || 'createdAt';
    const sortOrder = this?.query?.sortOrder || 'desc';
    const convertInOne = sortOrder === 'desc' ? -1 : 1;

    this.modelQuery = this.modelQuery.sort({
      [sortBy as string]: convertInOne,
    });

    return this;
  }
}

export default QueryBuilder;
