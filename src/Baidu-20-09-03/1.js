function Pagination(container, total, current) {
    this.total = total;
    this.current = current;
    this.html = html;
    this.val = val;
    this.el = null; //TODO: 创建分页组件根节点
    this.el = document.createElement('ul')
    if (!this.el) return;

    this.el.innerHTML = this.html();
    container.appendChild(this.el);
    this.el.className = ''; //TODO: 判断是否需要隐藏当前元素
    if (this.total <= 1) {
        this.el.className = 'pagination hide'
    }

    function html() {
        if (this.total <= 1) return '';

        //TODO: 生成组件的内部html字符串
        if (this.total <= 5) {
            let str = ''
            for (let i = 0; i < this.total; i++) {
                str += i === this.current ? `<li class="current">i</li>` : `<li>i</li>`
            }
            return str
        } else if (this.total === 6) {
            if (this.current <= 3) {
                let str = ''
                for (let i = 0; i < 5; i++) {
                    str += i === this.current ? `<li class="current">i</li>` : `<li>i</li>`
                }
                str += `<li>末页</li>`
                return str
            } else {
                let str = '<li>首页</li>'
                let start = current - 2
                for (let i = start; i < 5; i++) {
                    str += i === this.current ? `<li class="current">i</li>` : `<li>i</li>`
                }
                return str
            }
        } else {
            let start = current - 2, end = current + 2, str = `<li>首页</li>`
            for (let i = start; i <= end; i++) {
                str += i === this.current ? `<li class="current">i</li>` : `<li>i</li>`
            }
            return str + `<li>末页</li>`
        }
        return '';
    }

    function val(current) {
        if (arguments.length === 0) return this.current;
        if (current < 1 || current > this.total || current === this.current) return;
        this.current = current;
        this.el.innerHTML = this.html();
    };
}