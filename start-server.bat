@echo off
chcp 65001 >nul
title 第3章数据可视化网站服务器

echo ========================================
echo   第3章数据可视化网站 - 本地服务器
echo ========================================
echo.
echo 正在启动本地服务器...
echo.

:: 检查Python是否安装
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误: 未找到Python，请先安装Python
    echo 或者直接双击打开 index.html 文件
    pause
    exit /b 1
)

:: 启动Python本地服务器
echo 服务器启动成功！
echo 访问地址: http://localhost:8080
echo.
echo 按 Ctrl+C 停止服务器
echo.

:: 启动服务器并在默认浏览器中打开
start "" "http://localhost:8080"
python -m http.server 8080

pause