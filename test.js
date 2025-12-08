window.addEventListener("load", () => {

    console.log("Bundle system initialized");

    /* ----------------------------------
    CONFIG
    -----------------------------------*/

    let selectedBundle = 1;

    /* Variant mapping */
    const VARIANTS = {
        og: {
            1: 48836020633842,
            2: 48836041638130,
            3: 48836042948850
        },
        sours: {
            1: 48836020666610,
            2: 48836041670898,
            3: 48836042981618
        }
    };

    /* Discount codes */
    const DISCOUNTS = {
        1: "sub-yumzy-b1",
        2: "SUB-YUMZY-B2",
        3: "SUB-YUMZY-B3"
    };


    /* ----------------------------------
    HELPERS
    -----------------------------------*/

    function getSellingPlan(bundleElement) {

        const form = bundleElement.querySelector("form");

        if (!form) return null;

        const planInput = form.querySelector("input[name='selling_plan']");

        if (!planInput) return null;

        return planInput.value || null;
    }


    /* ----------------------------------
    BUNDLE SELECTION
    -----------------------------------*/

    const bundles = document.querySelectorAll(
        "[data-replo-set-product-quantity]"
    );

    console.log("Bundles detected:", bundles.length);

    bundles.forEach(bundle => {

        bundle.addEventListener("click", () => {

            selectedBundle = parseInt(
                bundle.dataset.reploSetProductQuantity
            );

            console.log("Bundle selected:", selectedBundle);

            /* UI highlight */

            bundles.forEach(b =>
                b.classList.remove("bundle-active")
            );

            bundle.classList.add("bundle-active");

        });

    });

    /* activate first bundle */

    if (bundles.length) {
        bundles[0].classList.add("bundle-active");
    }


    /* ----------------------------------
    FLAVOR SELECTION
    -----------------------------------*/

    const flavorRows = document.querySelectorAll("[data-flavor-row]");

    console.log("Flavor rows detected:", flavorRows.length);

    flavorRows.forEach(row => {

        const options = row.querySelectorAll("[data-flavor]");

        /* default flavor */

        row.dataset.selectedFlavor = "og";

        const defaultFlavor = row.querySelector("[data-flavor='og']");
        if (defaultFlavor) defaultFlavor.classList.add("flavor-active");

        options.forEach(btn => {

            btn.addEventListener("click", e => {

                e.stopPropagation();

                const flavor = btn.dataset.flavor;

                console.log("Flavor selected:", flavor);

                row.dataset.selectedFlavor = flavor;

                /* UI highlight */

                options.forEach(o =>
                    o.classList.remove("flavor-active")
                );

                btn.classList.add("flavor-active");

            });

        });

    });


    /* ----------------------------------
    CHECKOUT BUTTON
    -----------------------------------*/

    const checkoutBtn = document.querySelector(
        "[data-replo-add-product-variant-to-cart]"
    );

    if (!checkoutBtn) {

        console.error("Checkout button not found");

        return;

    }

    checkoutBtn.addEventListener("click", async e => {

        e.preventDefault();

        console.log("Checkout triggered");

        try {

            /* active bundle */

            const activeBundle =
                document.querySelector(".bundle-active");

            if (!activeBundle) {

                console.warn("No bundle active");

                return;

            }

            /* bundle quantity */

            const quantity = parseInt(
                activeBundle.dataset.reploSetProductQuantity
            );

            console.log("Bundle quantity:", quantity);

            /* selling plan */

            const sellingPlan = getSellingPlan(activeBundle);

            console.log("Selling plan:", sellingPlan);

            /* detect selected flavor */

            const firstRow =
                activeBundle.querySelector("[data-flavor-row]");

            const flavor =
                firstRow?.dataset.selectedFlavor || "og";

            console.log("Selected flavor:", flavor);

            /* variant ID */

            const variantId =
                VARIANTS[flavor][selectedBundle];

            console.log("Variant ID:", variantId);

            /* clear cart */

            await fetch("/cart/clear.js", {
                method: "POST"
            });

            /* add product */

            const payload = {
                items: [
                    {
                        id: variantId,
                        quantity: quantity,
                        selling_plan: sellingPlan
                    }
                ]
            };

            console.log("Cart payload:", payload);

            await fetch("/cart/add.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            /* redirect checkout */

            const discount = DISCOUNTS[selectedBundle];

            console.log("Applying discount:", discount);

            window.location.href =
                "/checkout?discount=" + discount;

        } catch (err) {

            console.error("Checkout error:", err);

        }

    });

});