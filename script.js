// 产品数据
const productData = {
    pot: {
        displayType: "single", // single: 单产品展示, cards: 卡片列表展示
        productName: "Signature-Forest Mushroom Hot Pot",
        title: "Premium Cookware Collection",
        description: "Crafted with premium materials for exceptional heat distribution and durability. Perfect for both everyday cooking and professional culinary experiences.",
        icon: "images/icon.png",
        mainImage: "images/product.png",
        products: [
            {name: "Stainless Steel Soup Pot", price: "$299", spec: "24cm 5L Capacity", image: "images/product.png"},
            {name: "Cast Iron Braiser", price: "$499", spec: "26cm 6L Capacity", image: "images/product.png"},
            {name: "Ceramic Casserole", price: "$199", spec: "22cm 3L Capacity", image: "images/product.png"},
            {name: "Non-stick Milk Pan", price: "$159", spec: "18cm 1.5L Capacity", image: "images/product.png"},
            {name: "Multi-tier Steamer", price: "$399", spec: "28cm Multi-layer Design", image: "images/product.png"}
        ]
    },
    pan: {
        displayType: "cards", // 卡片列表展示
        productName: "Professional Non-Stick Frying Pan",
        title: "Advanced Pan Collection", 
        description: "Image For Reference; Dishes Vary By Location.",
        icon: "images/icon.png",
        mainImage: "images/product.png",
        cards: [
            {name: "Quail Eggs", image: "images/product.png"},
            {name: "Crab Stick", image: "images/product.png"}, 
            {name: "Premium Luncheon Meat with Special Seasoning", image: "images/product.png"},
            {name: "Fish Tofu", image: "images/product.png"},
            {name: "Beef Balls", image: "images/product.png"},
            {name: "Fresh Fish Balls with Natural Ingredients", image: "images/product.png"},
            {name: "Mushrooms", image: "images/product.png"},
            {name: "Bean Curd", image: "images/product.png"},
            {name: "Lotus Root", image: "images/product.png"}
        ]
    },
    wok: {
        displayType: "cards",
        productName: "Traditional Carbon Steel Wok",
        title: "Authentic Wok Collection",
        description: "Traditional craftsmanship meets modern technology. Perfect for Asian cuisine preparation.",
        icon: "images/icon.png",
        mainImage: "images/product.png",
        cards: [
            {name: "Carbon Steel Wok", image: "images/product.png"},
            {name: "Non-stick Wok", image: "images/product.png"},
            {name: "Electric Wok", image: "images/product.png"},
            {name: "Mini Wok", image: "images/product.png"},
            {name: "Professional Wok Set", image: "images/product.png"},
            {name: "Round Bottom Wok", image: "images/product.png"}
        ]
    },
    steamer: {
        displayType: "single",
        productName: "Bamboo Steam Basket Set",
        title: "Traditional Steamer Collection",
        description: "Authentic bamboo steamers for healthy cooking methods. Preserve nutrients and natural flavors while creating delicious steamed dishes.",
        icon: "images/icon.png",
        mainImage: "images/product.png",
        products: [
            {name: "Bamboo Steamer Set", price: "$79", spec: "25cm 2-Tier Design", image: "images/product.png"},
            {name: "Stainless Steel Steamer", price: "$149", spec: "28cm Multi-level", image: "images/product.png"},
            {name: "Electric Steamer", price: "$199", spec: "Digital Timer Control", image: "images/product.png"},
            {name: "Silicone Steamer", price: "$59", spec: "Collapsible Design", image: "images/product.png"},
            {name: "Professional Steamer", price: "$299", spec: "Commercial Grade", image: "images/product.png"}
        ]
    },
    pressure: {
        displayType: "single",
        productName: "Smart Pressure Cooker Pro",
        title: "Modern Pressure Cooker Collection",
        description: "Advanced pressure cooking technology for fast, efficient, and safe cooking. Perfect for busy lifestyles and professional kitchens.",
        icon: "images/icon.png",
        mainImage: "images/product.png",
        products: [
            {name: "Electric Pressure Cooker", price: "$249", spec: "6L Smart Control", image: "images/product.png"},
            {name: "Stovetop Pressure Cooker", price: "$189", spec: "8L Traditional Style", image: "images/product.png"},
            {name: "Multi-function Pressure Cooker", price: "$299", spec: "10-in-1 Design", image: "images/product.png"},
            {name: "Mini Pressure Cooker", price: "$149", spec: "3L Compact Size", image: "images/product.png"},
            {name: "Professional Pressure Cooker", price: "$399", spec: "12L Heavy Duty", image: "images/product.png"}
        ]
    },
    blender: {
        displayType: "cards",
        productName: "High-Performance Blender Series",
        title: "Professional Blender Collection",
        description: "Powerful blending solutions for smoothies, soups, and more.",
        icon: "images/icon.png",
        mainImage: "images/product.png",
        cards: [
            {name: "High-Speed Blender", image: "images/product.png"},
            {name: "Immersion Blender", image: "images/product.png"},
            {name: "Personal Blender", image: "images/product.png"},
            {name: "Commercial Blender", image: "images/product.png"},
            {name: "Smoothie Blender", image: "images/product.png"},
            {name: "Soup Blender", image: "images/product.png"},
            {name: "Bullet Blender", image: "images/product.png"},
            {name: "Quiet Blender", image: "images/product.png"},
            {name: "Multi-function Blender", image: "images/product.png"},
            {name: "Professional Blender", image: "images/product.png"}
        ]
    },
    fryer: {
        displayType: "cards",
        productName: "Deep Fryer Collection",
        title: "Advanced Frying Solutions",
        description: "Professional frying equipment for crispy and delicious results.",
        icon: "images/icon.png",
        mainImage: "images/product.png",
        cards: [
            {name: "Deep Fryer", image: "images/product.png"},
            {name: "Air Fryer", image: "images/product.png"},
            {name: "Electric Fryer", image: "images/product.png"},
            {name: "Commercial Fryer", image: "images/product.png"},
            {name: "Compact Fryer", image: "images/product.png"},
            {name: "Multi-function Fryer", image: "images/product.png"},
            {name: "Oil-free Fryer", image: "images/product.png"},
            {name: "Temperature Control Fryer", image: "images/product.png"},
            {name: "Large Capacity Fryer", image: "images/product.png"}
        ]
    },
    processor: {
        displayType: "cards",
        productName: "Food Processor Collection",
        title: "Versatile Food Processing",
        description: "Efficient food processing equipment for all your culinary needs.",
        icon: "images/icon.png",
        mainImage: "images/product.png",
        cards: [
            {name: "Full-Size Food Processor", image: "images/product.png"},
            {name: "Mini Food Processor", image: "images/product.png"},
            {name: "Multi-function Processor", image: "images/product.png"},
            {name: "Compact Processor", image: "images/product.png"},
            {name: "Heavy-Duty Processor", image: "images/product.png"},
            {name: "Chopper Processor", image: "images/product.png"}
        ]
    }
};

// 当前页面状态
let currentCategory = 'pot';
let currentPage = 1;
let currentProductIndex = 0; // 当前选中的产品索引
let currentExpandedCard = null; // 当前展开的卡片索引
let isScrollingToCategory = false; // 标记是否正在通过点击分类进行滚动
let scrollTimer = null; // 滚动定时器
let updateCategoryTimer = null; // 更新分类状态的防抖定时器
const itemsPerPage = 5;

// DOM元素
const mainNav = document.getElementById('mainNav');
const productIcon = document.getElementById('productIcon');
const productName = document.getElementById('productName');
const productTitle = document.getElementById('productTitle');
const productDescription = document.getElementById('productDescription');
const mainProductImage = document.getElementById('mainProductImage');
const productList = document.getElementById('productList');
const pagination = document.getElementById('pagination');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');

// 卡片模式元素
const productSection = document.getElementById('productSection');
const cardsSection = document.getElementById('cardsSection');
const cardsIcon = document.getElementById('cardsIcon');
const cardsDescription = document.getElementById('cardsDescription');
const cardsGrid = document.getElementById('cardsGrid');
const cardsCategorySidebar = document.getElementById('cardsCategorySidebar');
const cardsCategoryList = document.getElementById('cardsCategoryList');

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initializeMainNavigation();
    initializePagination();
    initializeCardsCategoryList();
    
    // 确保主导航栏的active状态正确
    updateMainNavActive(currentCategory);
    
    updateProductContent(currentCategory);
    alignProductSection();
    
    // 初始加载时自动选择第一个产品
    selectFirstProductOnPage();
    
    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);
    
    // 确保页面完全加载后再次对齐
    window.addEventListener('load', alignProductSection);
    
    // 移动端优化
    initializeMobileOptimizations();
});

// 处理窗口大小变化
function handleResize() {
    alignProductSection();
    
    // 移动端和桌面端切换时重新初始化一些功能
    const isMobile = window.innerWidth <= 768;
    const contentContainer = document.querySelector('.content-container');
    
    if (isMobile) {
        // 移动端特定处理
        document.body.style.overflow = 'auto';
        
        // 检查当前是否为卡片模式，如果是则添加cards-mode类
        if (cardsSection && cardsSection.style.display !== 'none' && contentContainer) {
            contentContainer.classList.add('cards-mode');
        }
    } else {
        // 桌面端特定处理
        document.body.style.overflow = '';
        
        // 桌面端移除cards-mode类
        if (contentContainer) {
            contentContainer.classList.remove('cards-mode');
        }
    }
}

// 移动端优化初始化
function initializeMobileOptimizations() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // 防止iOS Safari的回弹效果
        document.addEventListener('touchmove', function(e) {
            if (e.target.closest('.main-nav') || e.target.closest('.related-products')) {
                // 允许在主导航和产品列表中滚动
                return;
            }
        }, { passive: true });
        
        // 优化触摸滚动
        const mainNavElement = document.querySelector('.main-nav');
        if (mainNavElement) {
            mainNavElement.style.webkitOverflowScrolling = 'touch';
        }
        
        // 移动端禁用桌面端的hover效果
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .nav-item:hover,
                .related-item:hover,
                .page-btn:hover {
                    transform: none !important;
                    background: inherit !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// 动态对齐product-section右边到main-nav右边
function alignProductSection() {
    const mainNavElement = document.querySelector('.main-nav');
    const mainContent = document.querySelector('.main-content');
    const productSection = document.querySelector('.product-section');
    const sidebar = document.querySelector('.sidebar');
    
    if (!mainNavElement || !mainContent || !productSection) return;
    
    // 只在桌面端应用对齐
    if (window.innerWidth <= 768) {
        mainContent.style.marginLeft = '0';
        mainContent.style.justifyContent = 'center';
        return;
    }
    
    // 如果没有侧边栏，居中显示主内容并取消对齐偏移
    if (!sidebar) {
        mainContent.style.marginLeft = '0';
        mainContent.style.justifyContent = 'center';
        return;
    }
    
    // 使用requestAnimationFrame确保DOM更新完成
    requestAnimationFrame(() => {
        // 获取main-nav的位置和尺寸
        const mainNavRect = mainNavElement.getBoundingClientRect();
        const mainNavRight = mainNavRect.right;
        
        // 获取product-section的宽度
        const productSectionStyles = getComputedStyle(productSection);
        const productSectionWidth = parseFloat(productSectionStyles.width);
        
        // 获取main-content的padding
        const mainContentStyles = getComputedStyle(mainContent);
        const mainContentPaddingLeft = parseFloat(mainContentStyles.paddingLeft);
        const mainContentPaddingRight = parseFloat(mainContentStyles.paddingRight);
        
        // 计算需要的margin-left值
        // main-nav右边位置 - product-section宽度 - main-content右padding
        const requiredMarginLeft = Math.max(0, mainNavRight - productSectionWidth - mainContentPaddingRight);
        
        // 应用对齐
        mainContent.style.marginLeft = `${requiredMarginLeft}px`;
        mainContent.style.justifyContent = 'flex-start';
    });
}

// 初始化卡片模式分类列表
function initializeCardsCategoryList() {
    if (!cardsCategoryList) return;
    
    // 获取所有有cards数据的分类
    const categoriesWithCards = Object.keys(productData).filter(key => 
        productData[key].displayType === 'cards'
    );
    
    cardsCategoryList.innerHTML = categoriesWithCards.map((category, index) => {
        const data = productData[category];
        // 为分类创建更友好的显示名称和图标
        const categoryInfo = {
            'pan': { name: 'Pan Series', icon: '🍳' },
            'wok': { name: 'Wok Series', icon: '🥘' },
            'blender': { name: 'Blender Series', icon: '🥤' },
            'fryer': { name: 'Fryer Series', icon: '🍟' },
            'processor': { name: 'Processor Series', icon: '⚙️' }
        };
        const categoryData = categoryInfo[category] || { name: category, icon: '🍽️' };
        // 默认激活第一个分类
        return `
            <div class="cards-category-item ${index === 0 ? 'active' : ''}" 
                 data-category="${category}" 
                 onclick="selectCardsCategory('${category}')">
                <span class="category-icon">${categoryData.icon}</span>
                <span class="cards-category-name">${categoryData.name}</span>
            </div>
        `;
    }).join('');
    
    // 默认激活第一个分类（不触发滚动）
    if (categoriesWithCards.length > 0) {
        const firstCategoryItem = cardsCategoryList.querySelector('.cards-category-item');
        if (firstCategoryItem) {
            firstCategoryItem.classList.add('active');
        }
    }
}

// 选择卡片分类
function selectCardsCategory(category) {
    // 用户点击有最高优先级，立即中断之前的滚动
    if (isScrollingToCategory) {
        // 清除之前的滚动定时器
        if (scrollTimer) {
            clearTimeout(scrollTimer);
            scrollTimer = null;
        }
        // 立即重置滚动锁状态
        isScrollingToCategory = false;
        console.log('用户点击中断之前的滚动');
    }
    
    // 只更新左侧分类列表的active状态，不影响上方导航
    const categoryItems = cardsCategoryList.querySelectorAll('.cards-category-item');
    categoryItems.forEach(item => {
        const isActive = item.getAttribute('data-category') === category;
        item.classList.toggle('active', isActive);
    });
    
    // 重置展开状态
    currentExpandedCard = null;
    
    // 滚动到对应分类的位置
    scrollToCategorySection(category);
}

// 滚动到分类区域
function scrollToCategorySection(category) {
    const categorySection = document.getElementById(`category-${category}`);
    
    if (categorySection) {
        isScrollingToCategory = true;
        
        // 检查是否为移动端
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // 移动端分类列表现在在左侧，不需要考虑高度偏移，只需要一个小的顶部边距
            const rect = categorySection.getBoundingClientRect();
            const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
            const targetY = rect.top + currentScrollY - 40; // 40px的顶部边距
            
            // 平滑滚动到目标位置
            window.scrollTo({
                top: Math.max(0, targetY),
                behavior: 'smooth'
            });
        } else {
            // 桌面端使用原有的scrollIntoView
            categorySection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // 清除之前的定时器
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        
        // 滚动完成后重置标志（减少锁定时间）
        scrollTimer = setTimeout(() => {
            isScrollingToCategory = false;
            scrollTimer = null;
        }, 800);
    }
}

// 存储滚动处理器引用，以便移除
let currentScrollHandler = null;

// 初始化滚动监听
function initializeScrollSpy() {
    const cardsSection = document.getElementById('cardsSection');
    if (!cardsSection) return;
    
    // 移除之前的滚动监听器（如果存在）
    if (currentScrollHandler) {
        window.removeEventListener('scroll', currentScrollHandler);
        document.removeEventListener('scroll', currentScrollHandler);
    }
    
    let ticking = false;
    
    currentScrollHandler = function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveCategory();
                ticking = false;
            });
            ticking = true;
        }
    };
    
    // 监听窗口滚动事件而不是cardsSection的滚动
    window.addEventListener('scroll', currentScrollHandler, { passive: true });
    
    // 初始加载时也检查一次
    setTimeout(() => {
        updateActiveCategory();
    }, 200);
}

// 更新当前激活的分类
function updateActiveCategory() {
    // 如果正在通过点击分类进行滚动，则不更新激活状态
    if (isScrollingToCategory) return;
    
    // 防抖机制：清除之前的定时器
    if (updateCategoryTimer) {
        clearTimeout(updateCategoryTimer);
    }
    
    // 延迟执行更新，避免频繁触发
    updateCategoryTimer = setTimeout(() => {
        doUpdateActiveCategory();
        updateCategoryTimer = null;
    }, 150); // 增加延迟时间，让用户点击滚动有足够时间完成
}

// 实际执行分类状态更新的函数
function doUpdateActiveCategory() {
    // 如果正在通过点击分类进行滚动，则不更新激活状态
    if (isScrollingToCategory) return;
    
    const cardsSection = document.getElementById('cardsSection');
    if (!cardsSection || !cardsCategoryList) return;
    
    const categorySections = cardsSection.querySelectorAll('.category-section');
    if (categorySections.length === 0) return;
    
    // 使用窗口滚动位置
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const scrollMiddle = scrollTop + viewportHeight / 3; // 使用视口上三分之一作为触发点
    
    let activeCategory = null;
    
    // 使用更清晰的逻辑来选择激活的分类
    for (let i = 0; i < categorySections.length; i++) {
        const section = categorySections[i];
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionBottom = sectionTop + rect.height;
        const categoryName = section.getAttribute('data-category');
        
        // 特殊情况：如果是第一个分类且滚动位置在顶部附近
        if (i === 0 && scrollTop <= sectionTop + 50) {
            activeCategory = categoryName;
            break;
        }
        // 特殊情况：如果是最后一个分类且滚动到了底部附近
        else if (i === categorySections.length - 1 && scrollTop + viewportHeight >= document.documentElement.scrollHeight - 50) {
            activeCategory = categoryName;
            break;
        }
        // 如果滚动位置在这个分类区域内
        else if (scrollMiddle >= sectionTop && scrollMiddle <= sectionBottom) {
            activeCategory = categoryName;
            break;
        }
    }
    
    // 更新侧边栏的激活状态
    if (activeCategory) {
        const categoryItems = cardsCategoryList.querySelectorAll('.cards-category-item');
        let activeItem = null;
        
        categoryItems.forEach(item => {
            const isActive = item.getAttribute('data-category') === activeCategory;
            item.classList.toggle('active', isActive);
            if (isActive) {
                activeItem = item;
            }
        });
        
        // 确保激活的分类项在可视区域内
        if (activeItem) {
            scrollCategoryItemIntoView(activeItem);
        }
    }
}

// 滚动分类项到可视区域
function scrollCategoryItemIntoView(activeItem) {
    if (!activeItem || !cardsCategoryList) return;
    
    // 检查是否为移动端
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // 移动端垂直滚动
        const containerRect = cardsCategoryList.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        
        // 计算是否需要滚动
        const itemTop = itemRect.top - containerRect.top + cardsCategoryList.scrollTop;
        const itemBottom = itemTop + itemRect.height;
        const containerHeight = containerRect.height;
        const scrollTop = cardsCategoryList.scrollTop;
        
        let targetScrollTop = scrollTop;
        
        // 如果项目在容器上边界外
        if (itemTop < scrollTop) {
            targetScrollTop = itemTop - 20; // 留20px边距
        }
        // 如果项目在容器下边界外
        else if (itemBottom > scrollTop + containerHeight) {
            targetScrollTop = itemBottom - containerHeight + 20; // 留20px边距
        }
        
        // 平滑滚动到目标位置
        if (targetScrollTop !== scrollTop) {
            cardsCategoryList.scrollTo({
                top: Math.max(0, targetScrollTop),
                behavior: 'smooth'
            });
        }
    }
    // 桌面端不需要特殊处理，因为分类列表是垂直显示且通常都在可视区域内
}

// 主导航选择功能
function initializeMainNavigation() {
    const navItems = mainNav.querySelectorAll('.nav-item');
    
    // 确保初始状态下正确的导航项处于active状态
    navItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (category === currentCategory) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有导航项的active状态
            navItems.forEach(c => c.classList.remove('active'));
            
            // 添加当前导航项的active状态
            this.classList.add('active');
            
            // 获取选中的分类
            const category = this.getAttribute('data-category');
            currentCategory = category;
            
            // 更新产品内容
            updateProductContent(category);
            
            // 重置到第一页和第一个产品
            currentPage = 1;
            currentProductIndex = 0;
            currentExpandedCard = null; // 重置展开状态
            updatePagination();
            
            // 自动选择第一个产品
            selectFirstProductOnPage();
        });
    });
}

// 更新主导航栏的active状态
function updateMainNavActive(targetCategory) {
    if (!mainNav) return;
    
    const navItems = mainNav.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (category === targetCategory) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// 更新产品内容
function updateProductContent(category) {
    const data = productData[category];
    if (!data) return;
    
    // 根据displayType切换显示模式
    if (data.displayType === 'cards') {
        showCardsMode(data);
    } else {
        showSingleMode(data);
    }
}

// 显示单产品模式
function showSingleMode(data) {
    // 显示单产品区域，隐藏卡片区域
    if (productSection) productSection.style.display = 'block';
    if (cardsSection) cardsSection.style.display = 'none';
    
    // 隐藏卡片模式的左侧分类列表，显示产品侧边栏（若存在）
    if (cardsCategorySidebar) cardsCategorySidebar.style.display = 'none';
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'block';
    
    // 检查是否为移动端，移除content-container的cards-mode类
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        const contentContainer = document.querySelector('.content-container');
        if (contentContainer) {
            contentContainer.classList.remove('cards-mode');
        }
    }
    
    // 清理滚动监听器和定时器
    if (currentScrollHandler) {
        window.removeEventListener('scroll', currentScrollHandler);
        currentScrollHandler = null;
    }
    
    // 清理所有定时器和锁状态
    if (scrollTimer) {
        clearTimeout(scrollTimer);
        scrollTimer = null;
    }
    if (updateCategoryTimer) {
        clearTimeout(updateCategoryTimer);
        updateCategoryTimer = null;
    }
    isScrollingToCategory = false;
    
    // 更新图标
    if (productIcon) {
        productIcon.src = data.icon;
    }
    
    // 更新产品名称
    if (productName) {
        productName.textContent = data.productName;
    }
    
    // 更新标题
    if (productTitle) {
        productTitle.textContent = data.title;
    }
    
    // 更新描述
    if (productDescription) {
        productDescription.textContent = data.description;
    }
    
    // 更新主图
    if (mainProductImage) {
        mainProductImage.src = data.mainImage;
    }
    
    // 更新产品列表
    updateProductList(data.products);
}

// 显示卡片模式
function showCardsMode(data) {
    // 显示卡片区域，隐藏单产品区域
    if (productSection) productSection.style.display = 'none';
    if (cardsSection) cardsSection.style.display = 'block';
    
    // 显示卡片模式的左侧分类列表，隐藏产品侧边栏（若存在）
    if (cardsCategorySidebar) cardsCategorySidebar.style.display = 'block';
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'none';
    
    // 检查是否为移动端，为content-container添加cards-mode类
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        const contentContainer = document.querySelector('.content-container');
        if (contentContainer) {
            contentContainer.classList.add('cards-mode');
        }
    }
    
    // 只在第一次显示卡片模式时初始化分类列表
    if (cardsCategoryList && cardsCategoryList.children.length === 0) {
        initializeCardsCategoryList();
    }
    
    // 显示所有分类的产品
    showAllCategoriesCards();
    
    // 初始化滚动监听 - 延迟确保DOM完全渲染
    setTimeout(() => {
        initializeScrollSpy();
    }, 100);
}

// 显示所有分类的卡片
function showAllCategoriesCards() {
    if (!cardsGrid) return;
    
    // 获取所有有cards数据的分类
    const categoriesWithCards = Object.keys(productData).filter(key => 
        productData[key].displayType === 'cards'
    );
    
    let allCardsHTML = '';
    let globalCardIndex = 0;
    
    categoriesWithCards.forEach(category => {
        const data = productData[category];
        const categoryInfo = {
            'pan': { name: 'Pan Series' },
            'wok': { name: 'Wok Series' },
            'blender': { name: 'Blender Series' },
            'fryer': { name: 'Fryer Series' },
            'processor': { name: 'Processor Series' }
        };
        const categoryData = categoryInfo[category] || { name: category };
        
        // 添加分类标题
        allCardsHTML += `
            <div class="category-section" id="category-${category}" data-category="${category}">
                <h2 class="category-section-title">${categoryData.name}</h2>
                <div class="category-cards-grid">
        `;
        
        // 添加该分类的所有卡片
        data.cards.forEach((card, index) => {
            allCardsHTML += `
                <div class="card-item" onclick="selectCard(this, ${globalCardIndex})" data-category="${category}">
                    <img src="${card.image}" alt="${card.name}" class="card-image">
                    <div class="card-name">${card.name}</div>
                    <div class="card-expand-btn" onclick="expandCard(event, ${globalCardIndex})"></div>
                    <div class="card-expand-panel" id="expand-panel-${globalCardIndex}">
                        <div class="card-expand-content">
                            <h3>${card.name}</h3>
                            <p>Premium quality ingredients with rich flavors. Perfect for various cooking methods to enhance your dining experience.</p>
                        </div>
                        <div class="card-collapse-btn" onclick="collapseCard(event, ${globalCardIndex})"></div>
                    </div>
                </div>
            `;
            globalCardIndex++;
        });
        
        allCardsHTML += `
                </div>
            </div>
        `;
    });
    
    cardsGrid.innerHTML = allCardsHTML;
}

// 更新卡片网格（保留原函数用于单分类显示）
function updateCardsGrid(cards) {
    if (!cardsGrid || !cards) return;
    
    cardsGrid.innerHTML = cards.map((card, index) => {
        return `
            <div class="card-item" onclick="selectCard(this, ${index})">
                <img src="${card.image}" alt="${card.name}" class="card-image">
                <div class="card-name">${card.name}</div>
                <div class="card-expand-btn" onclick="expandCard(event, ${index})"></div>
                <div class="card-expand-panel" id="expand-panel-${index}">
                    <div class="card-expand-content">
                        <h3>${card.name}</h3>
                        <p>Premium quality ingredients with rich flavors. Perfect for various cooking methods to enhance your dining experience.</p>
                    </div>
                    <div class="card-collapse-btn" onclick="collapseCard(event, ${index})"></div>
                </div>
            </div>
        `;
    }).join('');
}

// 展开卡片事件
function expandCard(event, cardIndex) {
    event.stopPropagation(); // 阻止事件冒泡
    const cards = productData[currentCategory].cards;
    const selectedCard = cards[cardIndex];
    
    if (!selectedCard) return;
    
    const panel = document.getElementById(`expand-panel-${cardIndex}`);
    if (!panel) return;
    
    // 如果点击的是当前已展开的卡片，则收起
    if (currentExpandedCard === cardIndex) {
        panel.classList.remove('expanded');
        currentExpandedCard = null;
        return;
    }
    
    // 先收起之前展开的面板
    if (currentExpandedCard !== null) {
        const prevPanel = document.getElementById(`expand-panel-${currentExpandedCard}`);
        if (prevPanel) {
            prevPanel.classList.remove('expanded');
        }
    }
    
    // 展开当前面板
    panel.classList.add('expanded');
    currentExpandedCard = cardIndex;
}

// 收起卡片事件
function collapseCard(event, cardIndex) {
    event.stopPropagation(); // 阻止事件冒泡
    const cards = productData[currentCategory].cards;
    const selectedCard = cards[cardIndex];
    
    if (!selectedCard) return;
    
    const panel = document.getElementById(`expand-panel-${cardIndex}`);
    if (!panel) return;
    
    panel.classList.remove('expanded');
    currentExpandedCard = null;
}

// 卡片点击事件
function selectCard(element, cardIndex) {
    const cards = productData[currentCategory].cards;
    const selectedCard = cards[cardIndex];
    
    if (!selectedCard) return;
    
    // 这里可以添加卡片选中的逻辑，比如高亮显示等
}

// 更新产品列表
function updateProductList(products) {
    if (!productList || !products) return;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayProducts = products.slice(startIndex, endIndex);
    
    productList.innerHTML = displayProducts.map((product, index) => {
        const globalIndex = startIndex + index;
        return `
            <div class="related-item" onclick="selectProduct(this, ${globalIndex})" data-index="${globalIndex}">
                <img src="${product.image}" alt="${product.name}">
            </div>
        `;
    }).join('');
}

// 产品项点击事件
function selectProduct(element, productIndex) {
    const data = productData[currentCategory];
    if (!data) return;
    
    const products = data.displayType === 'cards' ? data.cards : data.products;
    const selectedProduct = products[productIndex];
    
    if (!selectedProduct) return;
    
    // 更新当前产品索引
    currentProductIndex = productIndex;
    
    // 更新左侧产品详情
    updateMainProductDisplay(selectedProduct);
    
    // 滚动产品到中间位置（若存在侧边栏）
    if (element) {
        scrollProductToCenter(element);
    }
    
    // 更新分页器显示
    updatePaginationDisplay();
}

// 更新主要产品显示
function updateMainProductDisplay(product) {
    if (productName) {
        productName.textContent = product.name;
    }
    
    if (productTitle) {
        productTitle.textContent = product.name;
    }
    
    if (productDescription) {
        productDescription.textContent = `${product.spec} - ${product.price}`;
    }
    
    if (mainProductImage) {
        mainProductImage.src = product.image;
    }
}

// 滚动产品到中间位置
function scrollProductToCenter(element) {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    
    // 检查是否为移动端
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // 移动端：不执行任何滚动操作
        return;
    } else {
        // 桌面端：在sidebar内滚动
        const elementRect = element.getBoundingClientRect();
        const sidebarRect = sidebar.getBoundingClientRect();
        
        // 计算元素相对于sidebar的位置
        const elementTop = elementRect.top - sidebarRect.top + sidebar.scrollTop;
        const sidebarHeight = sidebar.clientHeight;
        const elementHeight = element.offsetHeight;
        
        // 计算滚动位置，使元素居中
        const scrollTo = elementTop - (sidebarHeight / 2) + (elementHeight / 2);
        
        sidebar.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
        });
    }
}



// 分页功能
function initializePagination() {
    // 上一页按钮 - 选择上一个产品
    prevBtn.addEventListener('click', function() {
        if (!this.classList.contains('disabled') && currentProductIndex > 0) {
            navigateToProduct(currentProductIndex - 1);
        }
    });
    
    // 下一页按钮 - 选择下一个产品
    nextBtn.addEventListener('click', function() {
        const data = productData[currentCategory];
        if (!data) return;
        
        const items = data.displayType === 'cards' ? data.cards : data.products;
        if (!items) return;
        
        const totalProducts = items.length;
        if (!this.classList.contains('disabled') && currentProductIndex < totalProducts - 1) {
            navigateToProduct(currentProductIndex + 1);
        }
    });
}

// 导航到指定产品
function navigateToProduct(productIndex) {
    const data = productData[currentCategory];
    if (!data) return;
    
    const products = data.displayType === 'cards' ? data.cards : data.products;
    const selectedProduct = products[productIndex];
    
    if (!selectedProduct) return;
    
    // 更新当前产品索引
    currentProductIndex = productIndex;
    
    // 计算需要显示的页面
    const targetPage = Math.floor(productIndex / itemsPerPage) + 1;
    
    // 如果需要切换页面，先更新页面
    if (targetPage !== currentPage) {
        currentPage = targetPage;
        updatePagination();
        updateProductList(products);
    }
    
    // 若无侧边栏列表，直接更新主展示与分页
    if (!productList) {
        updateMainProductDisplay(selectedProduct);
        updatePaginationDisplay();
        return;
    }
    
    // 等待DOM更新后选择对应产品
    setTimeout(() => {
        const targetProduct = productList ? productList.querySelector(`[data-index="${productIndex}"]`) : null;
        if (targetProduct) {
            // 更新左侧产品详情
            updateMainProductDisplay(selectedProduct);
            // 滚动产品到中间位置
            scrollProductToCenter(targetProduct);
        } else {
            // 无法找到目标项时也更新展示
            updateMainProductDisplay(selectedProduct);
        }
        
        // 更新分页器显示
        updatePaginationDisplay();
    }, 50);
}

// 选择当前页面的第一个产品
function selectFirstProductOnPage() {
    // 等待DOM更新后再执行
    setTimeout(() => {
        const data = productData[currentCategory];
        if (!data) return;
        const products = data.displayType === 'cards' ? data.cards : data.products;
        if (!products || products.length === 0) return;
        
        if (!productList) {
            currentProductIndex = 0;
            updateMainProductDisplay(products[0]);
            updatePaginationDisplay();
            return;
        }
        
        const firstProduct = productList.querySelector('.related-item[data-index]');
        if (firstProduct) {
            const productIndex = parseInt(firstProduct.getAttribute('data-index'));
            const selectedProduct = products[productIndex];
            if (selectedProduct) {
                currentProductIndex = productIndex;
                updateMainProductDisplay(selectedProduct);
                scrollProductToCenter(firstProduct);
                updatePaginationDisplay();
            }
        }
    }, 50); // 小延迟确保DOM已更新
}

// 更新分页状态
function updatePagination() {
    const data = productData[currentCategory];
    if (!data) return;
    
    // 根据displayType获取正确的数据数组
    const items = data.displayType === 'cards' ? data.cards : data.products;
    if (!items) return;
    
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    // 更新按钮状态
    if (currentPage === 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    
    if (currentPage === totalPages) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
    
    // 调用产品索引显示更新
    updatePaginationDisplay();
}

// 更新分页器显示（基于产品索引）
function updatePaginationDisplay() {
    const data = productData[currentCategory];
    if (!data) return;
    
    // 根据displayType获取正确的数据数组
    const items = data.displayType === 'cards' ? data.cards : data.products;
    if (!items) return;
    
    const totalProducts = items.length;
    
    // 更新按钮状态（基于产品索引）
    if (currentProductIndex <= 0) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    
    if (currentProductIndex >= totalProducts - 1) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
    
    // 更新显示：当前产品索引 + 1（从1开始显示）
    if (currentPageSpan) {
        currentPageSpan.textContent = (currentProductIndex + 1).toString().padStart(2, '0');
    }
    if (totalPagesSpan) {
        totalPagesSpan.textContent = totalProducts.toString().padStart(2, '0');
    }
}