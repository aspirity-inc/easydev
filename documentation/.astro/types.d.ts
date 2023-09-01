declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof AnyEntryMap> = AnyEntryMap[C][keyof AnyEntryMap[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"Changelog/index.md": {
	id: "Changelog/index.md";
  slug: "changelog";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Controls/checkbox.md": {
	id: "Components/Controls/checkbox.md";
  slug: "components/controls/checkbox";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Controls/control-with-label.md": {
	id: "Components/Controls/control-with-label.md";
  slug: "components/controls/control-with-label";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Controls/radio.md": {
	id: "Components/Controls/radio.md";
  slug: "components/controls/radio";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Controls/toggle.md": {
	id: "Components/Controls/toggle.md";
  slug: "components/controls/toggle";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Grid/index.md": {
	id: "Components/Grid/index.md";
  slug: "components/grid";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Inputs/input.md": {
	id: "Components/Inputs/input.md";
  slug: "components/inputs/input";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Inputs/masked-input.md": {
	id: "Components/Inputs/masked-input.md";
  slug: "components/inputs/masked-input";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Inputs/textarea.md": {
	id: "Components/Inputs/textarea.md";
  slug: "components/inputs/textarea";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Progress/progress-bar-with-title.md": {
	id: "Components/Progress/progress-bar-with-title.md";
  slug: "components/progress/progress-bar-with-title";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Progress/progress-bar.md": {
	id: "Components/Progress/progress-bar.md";
  slug: "components/progress/progress-bar";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Progress/range-slider.md": {
	id: "Components/Progress/range-slider.md";
  slug: "components/progress/range-slider";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Progress/stepper.md": {
	id: "Components/Progress/stepper.md";
  slug: "components/progress/stepper";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Tabs/tab-button.md": {
	id: "Components/Tabs/tab-button.md";
  slug: "components/tabs/tab-button";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Tabs/tabs.md": {
	id: "Components/Tabs/tabs.md";
  slug: "components/tabs/tabs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Toasts/toast-container.md": {
	id: "Components/Toasts/toast-container.md";
  slug: "components/toasts/toast-container";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Toasts/toast.md": {
	id: "Components/Toasts/toast.md";
  slug: "components/toasts/toast";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Typography/subtitle.md": {
	id: "Components/Typography/subtitle.md";
  slug: "components/typography/subtitle";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Typography/text.md": {
	id: "Components/Typography/text.md";
  slug: "components/typography/text";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/Typography/title.md": {
	id: "Components/Typography/title.md";
  slug: "components/typography/title";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/box.md": {
	id: "Components/box.md";
  slug: "components/box";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/breadcrumbs.md": {
	id: "Components/breadcrumbs.md";
  slug: "components/breadcrumbs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/chip.md": {
	id: "Components/chip.md";
  slug: "components/chip";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/datepicker.md": {
	id: "Components/datepicker.md";
  slug: "components/datepicker";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/link.md": {
	id: "Components/link.md";
  slug: "components/link";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/modal.md": {
	id: "Components/modal.md";
  slug: "components/modal";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/popover.md": {
	id: "Components/popover.md";
  slug: "components/popover";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/select.md": {
	id: "Components/select.md";
  slug: "components/select";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/space.md": {
	id: "Components/space.md";
  slug: "components/space";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Components/theme.md": {
	id: "Components/theme.md";
  slug: "components/theme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Getting started/1-introduction.md": {
	id: "Getting started/1-introduction.md";
  slug: "getting-started/1-introduction";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Getting started/Usage.md": {
	id: "Getting started/Usage.md";
  slug: "getting-started/usage";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Getting started/installation.md": {
	id: "Getting started/installation.md";
  slug: "getting-started/installation";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Getting started/resources.md": {
	id: "Getting started/resources.md";
  slug: "getting-started/resources";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Road map/index.md": {
	id: "Road map/index.md";
  slug: "road-map";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"Theming/index.mdx": {
	id: "Theming/index.mdx";
  slug: "theming";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = never;
}
