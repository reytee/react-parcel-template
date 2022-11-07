# REACT-WITH-PARCEL-TEMPLATE

## Clone
Open in terminal in folder and enter:
```
git clone https://github.com/reytee2k1/react-parcel-template.git
```

Change the project name by:
```
mv react-parcel-template <your_project_name>
```

Redirect to that project and open editor:
```
cd <your_project_name>
```

## Install
All necessary packages are ready, let's install it:
```
npm i
```


## Usage

```
npm start
```

### Production
Sau khi thực thi câu lệnh, nó sẽ build vào thư mục `build`:
```
npm run build
```

## Dependency module
Vì việc các tệp sâu bên trong các thư mục nên khi sử dụng các tệp bên ngoài sẽ phải sử dụng câu lệnh `import file from '../../../rootFile.js'` , điều này khá bất tiện.  

Thay vì thế, dự án mẫu này sử dụng `alias` trong parcel để đặt module linh hoạt hơn:
```
root
 | build
 | public
 | src
    | pages
       | Page.tsx
       | index.ts
       | ...
    | components
       | Input.tsx
    | App.tsx
    | ...
 | tsconfig.json
 | ...
```

_Page.tsx_
```ts
// Nhập từ thư mục src
import file from ':src/App';

file.a
file.b
file.c
...
```
Like
```ts
import file from '../App'
```
Nếu muốn thêm hoặc chỉnh sửa `alias` hãy vào package.json và tsconfig.json
