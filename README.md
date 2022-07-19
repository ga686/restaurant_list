# 我的餐廳清單

紀錄屬於自己的餐廳清單，可以瀏覽餐廳、查看詳細資訊、甚至連結到地圖。

![alt screenshot](/images/restaurant_list_screenshot.png)

## 功能

-   查看所有餐廳
-   瀏覽餐廳的詳細資訊
-   連結餐廳的地址到 Google 地圖
-   搜尋特定餐廳

## 優化

-   優化搜尋功能
    -   剔除多餘的空白
    -   搜尋沒有結果時有對應頁面提示


### 開始使用
1.  請先確認有安裝 node.js 與 npm
2.  將專案 clone 到本地
```
git clone https://github.com/ga686/restaurant_list.git
```
3.  在本地開啟之後，透過終端機進入資料夾，輸入：
 ```
npm install
 ```
4.  安裝完畢後，繼續輸入：
 ```
npm run start
 ```
5.  若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址
 ```
Listening on http://localhost:3000
 ```
6.  若欲暫停使用
 ```
ctrl + c
 ```

### 開發工具
-  Node.js 10.15.0
-   Express 4.18.1
-   Express-Handlebars 3.0.0
-   Bootstrap 5.2.0
-   Font-awesome 6.1.1