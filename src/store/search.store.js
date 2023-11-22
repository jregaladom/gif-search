import { defineStore } from 'pinia'
const name = 'search'
export const useSearchStore = defineStore(name, {
    state: () => ({
        query: '',
        results: [],
        offset: 0,
        loading: false,
        error: null,
    }),
    getters: {
        getQuery() {
            return this.query;
        },
        getResults() {
            return this.results;
        },
        getLoading() {
            return this.loading;
        },
        getError() {
            return this.error;
        },
        getOffset() {
            return this.offset;
        }
    },
    actions: {
        setQuery(query) {
            this.query = query;
        },
        setResults(results) {
            this.results.push(...results);
        },
        setCleanResults() {
            this.results = [];
        },
        setLoading(loading) {
            this.loading = loading;
        },
        setError(error) {
            this.error = error;
        },
        setOffset(offset) {
            this.offset = offset;
        }
    },
})