import assert from 'assert';

import {CachedMeasure} from '../0-core';
import {Node2} from './2-Node2';
import {Node3} from './3-Node3';

export function node2(M, a, b) {
	assert(
		!(a instanceof Node2 || a instanceof Node3) || M instanceof CachedMeasure
	);
	assert(
		a instanceof Node2 || a instanceof Node3 || !(M instanceof CachedMeasure)
	);
	return new Node2(M.plus(M.measure(a), M.measure(b)), a, b);
}