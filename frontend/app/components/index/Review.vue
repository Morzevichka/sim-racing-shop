<script setup>
defineProps({
    rating: {
        type: Number,
        required: true
    }
})
</script>


<template>
    <div class="card">
        <div class="content">
            <slot name="review" />
            <div class="content-buttom">
                <div class="reviewer">
                    <span class="reviewer-icon">
                        <span>
                            <slot name="reviewer-fs" />
                        </span>
                    </span>
                    <div class="reviewer-name">
                        <p class="name">
                            <slot name="name" />
                        </p>
                        <p class="from">
                            <slot name="from" />
                        </p>
                    </div>
                </div>
                <div>
                    <Icon v-for="n in rating" :key="'filled-' + n" name="mdi:star" />
                    <Icon v-for="n in (5 - rating)" :key="'empty-' + n" name="mdi:star-outline" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped> 
.card {
    background-color: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 8px;
    width: 400px;
}

.content {
    display: flex;
    flex-flow: column;
    padding: 1rem 2rem 2rem 2rem;
}

:deep(.content p) {
    color: var(--card-text-color);
    line-height: 1.5rem;
    margin-bottom: 1rem;
}

.content-buttom {
  display: flex;
  justify-content: space-between;
}

.content-buttom .icon {
  color: var(--accent-blue);
}

.reviewer {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.reviewer-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--card-border-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;
}

.reviewer-icon span {
    color: var(--card-text-muted-color);
    font-size: 1.125rem;
    font-weight: 500;
}

.reviewer .name {
    font-weight: 500;
    color: var(--white);
    margin: 0;
}

.reviewer .from {
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--card-text-muted-color);
    margin: 0;
}
</style>