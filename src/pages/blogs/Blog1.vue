<script setup>
</script>

<template>
    <div class="blog-detail-page">
        <section class="blog-hero">
            <div class="container">
                <div class="blog-header">
                    <div class="blog-image"></div>
                    <h1>Title</h1>
                    <p class="blog-date">Date</p>
                </div>
            </div>
        </section>

        <section class="blog-content">
            <div class="container">
                <article class="article">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur at harum neque facere cupiditate, porro sit vitae minima dolore et.</p>
                    <p>Our team of expert marketers is ready to help you implement these strategies and achieve your
                        business goals. Contact us today for a consultation.</p>
                </article>

                <div class="blog-navigation">
                    <router-link to="/blogs" class="back-link">← Back to All Blogs</router-link>
                </div>
            </div>
        </section>
    </div>

    <!-- <div class="blog-not-found">
        <div class="container">
            <h1>Blog Not Found</h1>
            <p>Sorry, the blog post you're looking for doesn't exist.</p>
            <router-link to="/blogs" class="back-link">Back to Blogs</router-link>
        </div>
    </div> -->
</template>

<style scoped>
.blog-detail-page {
    min-height: 100vh;
}

.blog-hero {
    background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 100%);
    color: var(--primary-white);
    padding: 10rem 2rem;
    text-align: center;
}

.blog-header {
    max-width: 800px;
    margin: 0 auto;
}

.blog-image {
    font-size: 5rem;
    margin-bottom: 2rem;
}

.blog-hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.blog-date {
    font-size: 1rem;
    opacity: 0.9;
}

.blog-content {
    padding: 4rem 2rem;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.article {
    background: var(--primary-white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    line-height: 1.8;
    font-size: 1.05rem;
    color: var(--text-light);
}

.article p {
    margin-bottom: 1.5rem;
}

.blog-navigation {
    margin-top: 2rem;
    text-align: center;
}

.back-link {
    display: inline-block;
    color: var(--primary-red);
    font-weight: 600;
    transition: color 0.3s ease;
    text-decoration: none;
}

.back-link:hover {
    color: var(--primary-green);
}

.related-blogs {
    padding: 4rem 2rem;
    background-color: var(--bg-light);
}

.related-blogs h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--primary-black);
}

.related-blogs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.related-blog-card {
    background: var(--primary-white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.related-blog-card:hover {
    transform: translateY(-5px);
}

.related-blog-card .blog-image {
    background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 100%);
    color: var(--primary-white);
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
}

.related-blog-card .blog-content {
    padding: 1.5rem;
}

.related-blog-card h3 {
    color: var(--primary-red);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    line-height: 1.3;
}

.related-blog-card p {
    color: var(--text-light);
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
}

.related-blog-card .read-more {
    color: var(--primary-red);
    font-weight: 600;
    transition: color 0.3s ease;
    text-decoration: none;
}

.related-blog-card .read-more:hover {
    color: var(--primary-green);
}

.blog-not-found {
    padding: 6rem 2rem;
    text-align: center;
}

.blog-not-found h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary-red);
}

.blog-not-found p {
    font-size: 1.1rem;
    color: var(--text-light);
    margin-bottom: 2rem;
}

@media (max-width: 768px) {
    .blog-hero h1 {
        font-size: 1.8rem;
    }

    .blog-image {
        font-size: 3rem;
    }

    .article {
        padding: 1.5rem;
    }

    .related-blogs-grid {
        grid-template-columns: 1fr;
    }
}
</style>
