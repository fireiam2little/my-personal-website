# 黃偉誠｜IT 維運、自動化與系統整合

個人專業作品集，使用 HTML、CSS 與 JavaScript 製作。直接開啟 index.html 即可預覽，無須安裝套件。

## 上傳 GitHub

1. 登入 https://github.com，右上角「+」→「New repository」。
2. Repository name 填入 my-personal-website，選 Public，勾選 Add a README file，按 Create repository。
3. 在新 repository 點「Add file」→「Upload files」。
4. 開啟桌面的 huang-weicheng-portfolio 資料夾，將裡面的檔案與 assets 資料夾一起拖進上傳區。上傳的是資料夾內容，不是外層資料夾。
5. 確認 index.html 在 repository 最外層，圖片在 assets/it-monitor-public.png。
6. 填寫更新說明，例如 Update portfolio，按 Commit changes。

若沿用既有 repository，直接從第 3 步開始。同名檔案會更新；舊檔案不會自動刪除，請檢查舊 PDF、履歷 TXT、未遮蔽截圖或備份是否仍公開。

## 啟用 GitHub Pages

1. Repository → Settings → Pages。
2. Build and deployment → Source 選 Deploy from a branch。
3. Branch 選 main，資料夾選 / (root)，按 Save。
4. 等待部署完成，回到 Pages 查看網站網址；也可在 Actions 查看部署是否成功。
5. 一般網址為 https://你的帳號.github.io/my-personal-website/ 。若 repository 名稱不同，最後一段跟著改。

之後更新網站：Add file → Upload files → 上傳修改過的檔案 → Commit changes。GitHub Pages 會重新部署。

## 檔案

- index.html：作品集主頁
- styles.css：響應式樣式
- script.js：選單與信箱複製
- resume.html：可列印履歷
- favicon.svg：網站圖示
- assets/it-monitor-public.png：去識別化展示圖

監控展示圖經 AI 圖像處理，細部文字與數值可能與原始截圖不同，頁面已標示。這份發佈資料夾不包含原始 PDF、TXT 或未遮蔽截圖。

官方說明：
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
