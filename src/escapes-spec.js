describe('escaped quotes', () => {
    function isNotNullOrUndefined(value) {
        return value !== null && value !== undefined;
    }

    it('should return false for "\'\'"', () => expect(isNotNullOrUndefined('')).toBe(true));
});
