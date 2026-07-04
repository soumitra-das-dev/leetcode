class Solution {
public:
    int mySqrt(int x) {
        int result = 0;
        for(int i = 1; (long long)i*i <= x; i++){
            result = i;
        }

        return result;
    }
};