# Calculate-of-Collatz-conjecture-Site
### コラッツ予想を計算するサイト
入力する値が偶数の場合は2で割り、奇数なら3倍して1足す処理をwhile文で値が1になるまで繰り返した。
```
while(input_num != 1) {
    if (input_num % 2 == 0) {
        input_num = input_num / 2;
        result_array.push(input_num);
    } else {
        input_num = input_num * 3 + 1;
        result_array.push(input_num);
    }
}
```
