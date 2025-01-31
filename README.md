# React Native Dimensions.get() returns undefined

This repository demonstrates a common issue in React Native where `Dimensions.get('window')` or `Dimensions.get('screen')` returns `undefined` or `null`.  The problem is that the dimensions aren't available immediately after component mount. The provided solution shows how to correctly access these dimensions.

## Bug Description
The bug occurs when attempting to read screen dimensions before the component has finished rendering, causing undefined or null dimensions to be accessed, triggering errors.

## Solution
The solution uses `useEffect` to fetch the dimensions after the component renders.  This avoids errors and ensures the dimensions are correctly used.