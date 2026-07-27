const ProductDetailSkeleton = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-10 animate-pulse">
            {/* Image placeholder */}
            <div className="bg-bg-secondary rounded-3xl p-8 h-fit">
                <div className="w-full aspect-square bg-border rounded-2xl" />
            </div>

            {/* Details placeholder */}
            <div className="flex flex-col">
                <div className="w-24 h-6 bg-border rounded-full mb-4" />
                <div className="w-3/4 h-10 bg-border rounded-lg mb-2" />
                <div className="w-1/2 h-10 bg-border rounded-lg mb-5" />

                <div className="w-40 h-6 bg-border rounded-lg pb-5 border-b border-border mb-5" />

                <div className="w-32 h-10 bg-border rounded-lg pb-5 border-b border-border mb-5" />

                <div className="space-y-2 mb-6">
                    <div className="w-full h-4 bg-border rounded-lg" />
                    <div className="w-5/6 h-4 bg-border rounded-lg" />
                </div>

                <div className="w-full h-14 bg-border rounded-xl mb-6" />

                <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="h-20 bg-border rounded-xl" />
                    <div className="h-20 bg-border rounded-xl" />
                    <div className="h-20 bg-border rounded-xl" />
                </div>

                <div className="w-full h-14 bg-border rounded-xl" />
            </div>
        </div>
    )
}

export default ProductDetailSkeleton