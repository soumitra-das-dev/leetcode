class Solution {
public:
    int mySqrt(int x) {
        int result = 0;
        for(long int i = 1; i*i <= x; i++){
            if(x/i==i){
                result = i;
                break;
            }

            result = i;
        }

        return result;
    }
};