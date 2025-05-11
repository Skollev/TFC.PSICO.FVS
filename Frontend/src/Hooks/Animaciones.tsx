import { Global } from '@emotion/react';

const AnimationStyles = () => (
    <Global
        styles={{
            "@keyframes slideRight": {
                "0%": {
                    opacity: 0,
                    transform: "translateX(200px)",
                },
                "100%": {
                    opacity: 1,
                    transform: "translateX(0)",
                },
            },
            "@keyframes slideLeft": {
                "0%": {
                    opacity: 0,
                    transform: "translateX(-100px)",
                },
                "100%": {
                    opacity: 1,
                    transform: "translateX(0px)",

                },

            },
            "@keyframes slideUp": {
                "0%": {
                    opacity: 0,
                    transform: "translateY(200px)",
                },
                "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                },
            },
            "@keyframes slideUpAndRight": {
                "0%": {
                    opacity: 0,
                    transform: "translateY(200px) translateX(-600px)"
                },
                "50%": {
                    opacity: 1,
                    transform: "translateY(0) translateX(-600px)"
                },
                "100%": {
                    opacity: 1,
                    transform: "translateY(0) translateX(0px)"
                }
            },
            "@keyframes fadeIn": {
                "0%": {
                    opacity: 0,
                },
                "100%": {
                    opacity: 1,
                }
            },
            "@keyframes shrinkRight": {
                "0%": { transform: "scaleX(1)", transformOrigin: "right center" },
                "100%": { transform: "scaleX(0)", transformOrigin: "right center" },
            },

            "@keyframes rotate": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
            },

        }}
    />
);

export default AnimationStyles;
