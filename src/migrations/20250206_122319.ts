import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_role\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_role_order_idx\` ON \`users_role\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`users_role_parent_idx\` ON \`users_role\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`platform\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_social_links_order_idx\` ON \`users_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_social_links_parent_id_idx\` ON \`users_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`display_name\` text,
  	\`username\` text NOT NULL,
  	\`image_url_id\` integer,
  	\`email_verified\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`_verified\` integer,
  	\`_verificationtoken\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text,
  	FOREIGN KEY (\`image_url_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`users_username_idx\` ON \`users\` (\`username\`);`)
  await db.run(sql`CREATE INDEX \`users_image_url_idx\` ON \`users\` (\`image_url_id\`);`)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_details\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`collection_slug\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_details_order_idx\` ON \`pages_blocks_details\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_details_parent_id_idx\` ON \`pages_blocks_details\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_details_path_idx\` ON \`pages_blocks_details\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`collection_slug\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_list_order_idx\` ON \`pages_blocks_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_list_parent_id_idx\` ON \`pages_blocks_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_list_path_idx\` ON \`pages_blocks_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_form_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_order_idx\` ON \`pages_blocks_form_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_parent_id_idx\` ON \`pages_blocks_form_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_path_idx\` ON \`pages_blocks_form_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_hero_section_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_hero_section_images_order_idx\` ON \`pages_blocks_hero_hero_section_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_hero_section_images_parent_id_idx\` ON \`pages_blocks_hero_hero_section_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_hero_section_images_image_idx\` ON \`pages_blocks_hero_hero_section_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_order_idx\` ON \`pages_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_parent_id_idx\` ON \`pages_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_path_idx\` ON \`pages_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_posts_order_idx\` ON \`pages_blocks_blog_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_posts_parent_id_idx\` ON \`pages_blocks_blog_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_posts_path_idx\` ON \`pages_blocks_blog_posts\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_companies_company_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`company_logo_id\` integer,
  	FOREIGN KEY (\`company_logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_companies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_companies_company_logos_order_idx\` ON \`pages_blocks_companies_company_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_companies_company_logos_parent_id_idx\` ON \`pages_blocks_companies_company_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_companies_company_logos_company_logo_idx\` ON \`pages_blocks_companies_company_logos\` (\`company_logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_companies\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_companies_order_idx\` ON \`pages_blocks_companies\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_companies_parent_id_idx\` ON \`pages_blocks_companies\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_companies_path_idx\` ON \`pages_blocks_companies\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content_content_details\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`subtitle\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_content\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_content_details_order_idx\` ON \`pages_blocks_content_content_details\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_content_details_parent_id_idx\` ON \`pages_blocks_content_content_details\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_order_idx\` ON \`pages_blocks_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_parent_id_idx\` ON \`pages_blocks_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_path_idx\` ON \`pages_blocks_content\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_image_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_block_order_idx\` ON \`pages_blocks_image_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_block_parent_id_idx\` ON \`pages_blocks_image_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_block_path_idx\` ON \`pages_blocks_image_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_block_image_idx\` ON \`pages_blocks_image_block\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team_team\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`name\` text,
  	\`designation\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_team\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_team_order_idx\` ON \`pages_blocks_team_team\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_team_parent_id_idx\` ON \`pages_blocks_team_team\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_team_image_idx\` ON \`pages_blocks_team_team\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_team\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_order_idx\` ON \`pages_blocks_team\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_parent_id_idx\` ON \`pages_blocks_team\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_team_path_idx\` ON \`pages_blocks_team\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_values_values\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_values\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_values_values_order_idx\` ON \`pages_blocks_values_values\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_values_values_parent_id_idx\` ON \`pages_blocks_values_values\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_values\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_values_order_idx\` ON \`pages_blocks_values\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_values_parent_id_idx\` ON \`pages_blocks_values\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_values_path_idx\` ON \`pages_blocks_values\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_terms_or_privacy\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_terms_or_privacy_order_idx\` ON \`pages_blocks_terms_or_privacy\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_terms_or_privacy_parent_id_idx\` ON \`pages_blocks_terms_or_privacy\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_terms_or_privacy_path_idx\` ON \`pages_blocks_terms_or_privacy\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_featured_jobs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`button_text\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_featured_jobs_order_idx\` ON \`pages_blocks_featured_jobs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_featured_jobs_parent_id_idx\` ON \`pages_blocks_featured_jobs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_featured_jobs_path_idx\` ON \`pages_blocks_featured_jobs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`address\` text,
  	\`contact_number\` text,
  	\`mail\` text,
  	\`contact_form_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`contact_form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_order_idx\` ON \`pages_blocks_contact\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_parent_id_idx\` ON \`pages_blocks_contact\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_path_idx\` ON \`pages_blocks_contact\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_form_idx\` ON \`pages_blocks_contact\` (\`contact_form_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_disqus_comments\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`short_name\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_disqus_comments_order_idx\` ON \`pages_blocks_disqus_comments\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_disqus_comments_parent_id_idx\` ON \`pages_blocks_disqus_comments\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_disqus_comments_path_idx\` ON \`pages_blocks_disqus_comments\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_breadcrumbs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`doc_id\` integer,
  	\`url\` text,
  	\`label\` text,
  	FOREIGN KEY (\`doc_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_breadcrumbs_order_idx\` ON \`pages_breadcrumbs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_breadcrumbs_parent_id_idx\` ON \`pages_breadcrumbs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_breadcrumbs_doc_idx\` ON \`pages_breadcrumbs\` (\`doc_id\`);`)
  await db.run(sql`CREATE TABLE \`pages\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`is_home\` integer DEFAULT false,
  	\`is_dynamic\` integer DEFAULT false,
  	\`slug_mode\` text DEFAULT 'generate',
  	\`slug\` text,
  	\`path_mode\` text DEFAULT 'generate',
  	\`path\` text,
  	\`parent_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_title_idx\` ON \`pages\` (\`title\`);`)
  await db.run(sql`CREATE INDEX \`pages_meta_meta_image_idx\` ON \`pages\` (\`meta_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_slug_idx\` ON \`pages\` (\`slug\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_path_idx\` ON \`pages\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`pages_parent_idx\` ON \`pages\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_updated_at_idx\` ON \`pages\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`pages_created_at_idx\` ON \`pages\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`pages__status_idx\` ON \`pages\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`pages_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`forms_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`forms_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_rels_order_idx\` ON \`pages_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_parent_idx\` ON \`pages_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_path_idx\` ON \`pages_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_forms_id_idx\` ON \`pages_rels\` (\`forms_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_details\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`collection_slug\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_details_order_idx\` ON \`_pages_v_blocks_details\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_details_parent_id_idx\` ON \`_pages_v_blocks_details\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_details_path_idx\` ON \`_pages_v_blocks_details\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`collection_slug\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_list_order_idx\` ON \`_pages_v_blocks_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_list_parent_id_idx\` ON \`_pages_v_blocks_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_list_path_idx\` ON \`_pages_v_blocks_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_form_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_order_idx\` ON \`_pages_v_blocks_form_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_parent_id_idx\` ON \`_pages_v_blocks_form_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_path_idx\` ON \`_pages_v_blocks_form_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero_hero_section_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_hero_section_images_order_idx\` ON \`_pages_v_blocks_hero_hero_section_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_hero_section_images_parent_id_idx\` ON \`_pages_v_blocks_hero_hero_section_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_hero_section_images_image_idx\` ON \`_pages_v_blocks_hero_hero_section_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_order_idx\` ON \`_pages_v_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_parent_id_idx\` ON \`_pages_v_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_path_idx\` ON \`_pages_v_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_blog_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_posts_order_idx\` ON \`_pages_v_blocks_blog_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_posts_parent_id_idx\` ON \`_pages_v_blocks_blog_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_posts_path_idx\` ON \`_pages_v_blocks_blog_posts\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_companies_company_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`company_logo_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`company_logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_companies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_companies_company_logos_order_idx\` ON \`_pages_v_blocks_companies_company_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_companies_company_logos_parent_id_idx\` ON \`_pages_v_blocks_companies_company_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_companies_company_logos_company_logo_idx\` ON \`_pages_v_blocks_companies_company_logos\` (\`company_logo_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_companies\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_companies_order_idx\` ON \`_pages_v_blocks_companies\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_companies_parent_id_idx\` ON \`_pages_v_blocks_companies\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_companies_path_idx\` ON \`_pages_v_blocks_companies\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_content_content_details\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`subtitle\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_content\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_content_details_order_idx\` ON \`_pages_v_blocks_content_content_details\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_content_details_parent_id_idx\` ON \`_pages_v_blocks_content_content_details\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_content\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_order_idx\` ON \`_pages_v_blocks_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_parent_id_idx\` ON \`_pages_v_blocks_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_path_idx\` ON \`_pages_v_blocks_content\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_image_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_block_order_idx\` ON \`_pages_v_blocks_image_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_block_parent_id_idx\` ON \`_pages_v_blocks_image_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_block_path_idx\` ON \`_pages_v_blocks_image_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_block_image_idx\` ON \`_pages_v_blocks_image_block\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_team_team\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`name\` text,
  	\`designation\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_team\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_team_team_order_idx\` ON \`_pages_v_blocks_team_team\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_team_team_parent_id_idx\` ON \`_pages_v_blocks_team_team\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_team_team_image_idx\` ON \`_pages_v_blocks_team_team\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_team\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_team_order_idx\` ON \`_pages_v_blocks_team\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_team_parent_id_idx\` ON \`_pages_v_blocks_team\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_team_path_idx\` ON \`_pages_v_blocks_team\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_values_values\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_values\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_values_values_order_idx\` ON \`_pages_v_blocks_values_values\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_values_values_parent_id_idx\` ON \`_pages_v_blocks_values_values\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_values\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_values_order_idx\` ON \`_pages_v_blocks_values\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_values_parent_id_idx\` ON \`_pages_v_blocks_values\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_values_path_idx\` ON \`_pages_v_blocks_values\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_terms_or_privacy\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`content\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_terms_or_privacy_order_idx\` ON \`_pages_v_blocks_terms_or_privacy\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_terms_or_privacy_parent_id_idx\` ON \`_pages_v_blocks_terms_or_privacy\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_terms_or_privacy_path_idx\` ON \`_pages_v_blocks_terms_or_privacy\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_featured_jobs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`button_text\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_featured_jobs_order_idx\` ON \`_pages_v_blocks_featured_jobs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_featured_jobs_parent_id_idx\` ON \`_pages_v_blocks_featured_jobs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_featured_jobs_path_idx\` ON \`_pages_v_blocks_featured_jobs\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`address\` text,
  	\`contact_number\` text,
  	\`mail\` text,
  	\`contact_form_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`contact_form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_order_idx\` ON \`_pages_v_blocks_contact\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_parent_id_idx\` ON \`_pages_v_blocks_contact\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_path_idx\` ON \`_pages_v_blocks_contact\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_form_idx\` ON \`_pages_v_blocks_contact\` (\`contact_form_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_disqus_comments\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`short_name\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_disqus_comments_order_idx\` ON \`_pages_v_blocks_disqus_comments\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_disqus_comments_parent_id_idx\` ON \`_pages_v_blocks_disqus_comments\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_disqus_comments_path_idx\` ON \`_pages_v_blocks_disqus_comments\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_breadcrumbs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`doc_id\` integer,
  	\`url\` text,
  	\`label\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`doc_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_version_breadcrumbs_order_idx\` ON \`_pages_v_version_breadcrumbs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_breadcrumbs_parent_id_idx\` ON \`_pages_v_version_breadcrumbs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_breadcrumbs_doc_idx\` ON \`_pages_v_version_breadcrumbs\` (\`doc_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_title\` text,
  	\`version_meta_title\` text,
  	\`version_meta_description\` text,
  	\`version_meta_image_id\` integer,
  	\`version_is_home\` integer DEFAULT false,
  	\`version_is_dynamic\` integer DEFAULT false,
  	\`version_slug_mode\` text DEFAULT 'generate',
  	\`version_slug\` text,
  	\`version_path_mode\` text DEFAULT 'generate',
  	\`version_path\` text,
  	\`version_parent_id\` integer,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_parent_idx\` ON \`_pages_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_title_idx\` ON \`_pages_v\` (\`version_title\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_meta_version_meta_image_idx\` ON \`_pages_v\` (\`version_meta_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_slug_idx\` ON \`_pages_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_path_idx\` ON \`_pages_v\` (\`version_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_parent_idx\` ON \`_pages_v\` (\`version_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_updated_at_idx\` ON \`_pages_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_created_at_idx\` ON \`_pages_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version__status_idx\` ON \`_pages_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_created_at_idx\` ON \`_pages_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_updated_at_idx\` ON \`_pages_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_latest_idx\` ON \`_pages_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`forms_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`forms_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_order_idx\` ON \`_pages_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_parent_idx\` ON \`_pages_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_path_idx\` ON \`_pages_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_forms_id_idx\` ON \`_pages_v_rels\` (\`forms_id\`);`)
  await db.run(sql`CREATE TABLE \`blogs\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`blog_image_id\` integer,
  	\`title\` text,
  	\`description\` text,
  	\`content\` text,
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`slug\` text,
  	\`publish_on\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`blog_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`blogs_blog_image_idx\` ON \`blogs\` (\`blog_image_id\`);`)
  await db.run(sql`CREATE INDEX \`blogs_meta_meta_image_idx\` ON \`blogs\` (\`meta_image_id\`);`)
  await db.run(sql`CREATE INDEX \`blogs_slug_idx\` ON \`blogs\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`blogs_updated_at_idx\` ON \`blogs\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`blogs_created_at_idx\` ON \`blogs\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`blogs__status_idx\` ON \`blogs\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`blogs_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`tags_id\` integer,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`blogs\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`tags_id\`) REFERENCES \`tags\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`blogs_rels_order_idx\` ON \`blogs_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`blogs_rels_parent_idx\` ON \`blogs_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`blogs_rels_path_idx\` ON \`blogs_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`blogs_rels_tags_id_idx\` ON \`blogs_rels\` (\`tags_id\`);`)
  await db.run(sql`CREATE INDEX \`blogs_rels_users_id_idx\` ON \`blogs_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_blogs_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_blog_image_id\` integer,
  	\`version_title\` text,
  	\`version_description\` text,
  	\`version_content\` text,
  	\`version_meta_title\` text,
  	\`version_meta_description\` text,
  	\`version_meta_image_id\` integer,
  	\`version_slug\` text,
  	\`version_publish_on\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`blogs\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_blog_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_blogs_v_parent_idx\` ON \`_blogs_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_version_version_blog_image_idx\` ON \`_blogs_v\` (\`version_blog_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_version_meta_version_meta_image_idx\` ON \`_blogs_v\` (\`version_meta_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_version_version_slug_idx\` ON \`_blogs_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_version_version_updated_at_idx\` ON \`_blogs_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_version_version_created_at_idx\` ON \`_blogs_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_version_version__status_idx\` ON \`_blogs_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_created_at_idx\` ON \`_blogs_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_updated_at_idx\` ON \`_blogs_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_latest_idx\` ON \`_blogs_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`_blogs_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`tags_id\` integer,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_blogs_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`tags_id\`) REFERENCES \`tags\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_blogs_v_rels_order_idx\` ON \`_blogs_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_rels_parent_idx\` ON \`_blogs_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_rels_path_idx\` ON \`_blogs_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_rels_tags_id_idx\` ON \`_blogs_v_rels\` (\`tags_id\`);`)
  await db.run(sql`CREATE INDEX \`_blogs_v_rels_users_id_idx\` ON \`_blogs_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`tags\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`tag_image_id\` integer,
  	\`title\` text,
  	\`description\` text,
  	\`color\` text DEFAULT 'blue',
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`tag_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`tags_tag_image_idx\` ON \`tags\` (\`tag_image_id\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`tags_title_idx\` ON \`tags\` (\`title\`);`)
  await db.run(sql`CREATE INDEX \`tags_meta_meta_image_idx\` ON \`tags\` (\`meta_image_id\`);`)
  await db.run(sql`CREATE INDEX \`tags_slug_idx\` ON \`tags\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`tags_updated_at_idx\` ON \`tags\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`tags_created_at_idx\` ON \`tags\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`tags__status_idx\` ON \`tags\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_tags_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_tag_image_id\` integer,
  	\`version_title\` text,
  	\`version_description\` text,
  	\`version_color\` text DEFAULT 'blue',
  	\`version_meta_title\` text,
  	\`version_meta_description\` text,
  	\`version_meta_image_id\` integer,
  	\`version_slug\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`tags\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_tag_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_tags_v_parent_idx\` ON \`_tags_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_version_version_tag_image_idx\` ON \`_tags_v\` (\`version_tag_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_version_version_title_idx\` ON \`_tags_v\` (\`version_title\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_version_meta_version_meta_image_idx\` ON \`_tags_v\` (\`version_meta_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_version_version_slug_idx\` ON \`_tags_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_version_version_updated_at_idx\` ON \`_tags_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_version_version_created_at_idx\` ON \`_tags_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_version_version__status_idx\` ON \`_tags_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_created_at_idx\` ON \`_tags_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_updated_at_idx\` ON \`_tags_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_tags_v_latest_idx\` ON \`_tags_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric,
  	\`sizes_thumbnail_url\` text,
  	\`sizes_thumbnail_width\` numeric,
  	\`sizes_thumbnail_height\` numeric,
  	\`sizes_thumbnail_mime_type\` text,
  	\`sizes_thumbnail_filesize\` numeric,
  	\`sizes_thumbnail_filename\` text,
  	\`sizes_blog_image_size2_url\` text,
  	\`sizes_blog_image_size2_width\` numeric,
  	\`sizes_blog_image_size2_height\` numeric,
  	\`sizes_blog_image_size2_mime_type\` text,
  	\`sizes_blog_image_size2_filesize\` numeric,
  	\`sizes_blog_image_size2_filename\` text,
  	\`sizes_blog_image_size3_url\` text,
  	\`sizes_blog_image_size3_width\` numeric,
  	\`sizes_blog_image_size3_height\` numeric,
  	\`sizes_blog_image_size3_mime_type\` text,
  	\`sizes_blog_image_size3_filesize\` numeric,
  	\`sizes_blog_image_size3_filename\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_thumbnail_sizes_thumbnail_filename_idx\` ON \`media\` (\`sizes_thumbnail_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_blog_image_size2_sizes_blog_image_size2_filename_idx\` ON \`media\` (\`sizes_blog_image_size2_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_blog_image_size3_sizes_blog_image_size3_filename_idx\` ON \`media\` (\`sizes_blog_image_size3_filename\`);`)
  await db.run(sql`CREATE TABLE \`job_posts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`company_name\` text,
  	\`company_email\` text,
  	\`company_logo_id\` integer,
  	\`company_website\` text,
  	\`company_location\` text,
  	\`dates_opening_date\` text,
  	\`dates_closing_date\` text,
  	\`job_details_title\` text,
  	\`job_details_slug\` text,
  	\`job_details_type_id\` integer,
  	\`job_details_salary_type\` text DEFAULT 'fixed',
  	\`job_details_salary_amount\` numeric,
  	\`job_details_salary_min\` numeric,
  	\`job_details_salary_max\` numeric,
  	\`job_details_description\` text,
  	\`job_details_remote\` integer,
  	\`requirements_experience\` numeric,
  	\`application_apply_type\` text DEFAULT 'internal',
  	\`application_external_form_url\` text,
  	\`application_internal_form_id\` integer,
  	\`featured\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`company_logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`job_details_type_id\`) REFERENCES \`job_types\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`application_internal_form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`job_posts_company_company_logo_idx\` ON \`job_posts\` (\`company_logo_id\`);`)
  await db.run(sql`CREATE INDEX \`job_posts_job_details_job_details_type_idx\` ON \`job_posts\` (\`job_details_type_id\`);`)
  await db.run(sql`CREATE INDEX \`job_posts_application_application_internal_form_idx\` ON \`job_posts\` (\`application_internal_form_id\`);`)
  await db.run(sql`CREATE INDEX \`job_posts_updated_at_idx\` ON \`job_posts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`job_posts_created_at_idx\` ON \`job_posts\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`job_posts__status_idx\` ON \`job_posts\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`job_posts_texts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`job_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`job_posts_texts_order_parent_idx\` ON \`job_posts_texts\` (\`order\`,\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`job_posts_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`job_roles_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`job_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`job_roles_id\`) REFERENCES \`job_roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`job_posts_rels_order_idx\` ON \`job_posts_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`job_posts_rels_parent_idx\` ON \`job_posts_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`job_posts_rels_path_idx\` ON \`job_posts_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`job_posts_rels_job_roles_id_idx\` ON \`job_posts_rels\` (\`job_roles_id\`);`)
  await db.run(sql`CREATE TABLE \`_job_posts_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_company_name\` text,
  	\`version_company_email\` text,
  	\`version_company_logo_id\` integer,
  	\`version_company_website\` text,
  	\`version_company_location\` text,
  	\`version_dates_opening_date\` text,
  	\`version_dates_closing_date\` text,
  	\`version_job_details_title\` text,
  	\`version_job_details_slug\` text,
  	\`version_job_details_type_id\` integer,
  	\`version_job_details_salary_type\` text DEFAULT 'fixed',
  	\`version_job_details_salary_amount\` numeric,
  	\`version_job_details_salary_min\` numeric,
  	\`version_job_details_salary_max\` numeric,
  	\`version_job_details_description\` text,
  	\`version_job_details_remote\` integer,
  	\`version_requirements_experience\` numeric,
  	\`version_application_apply_type\` text DEFAULT 'internal',
  	\`version_application_external_form_url\` text,
  	\`version_application_internal_form_id\` integer,
  	\`version_featured\` integer DEFAULT false,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`job_posts\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_company_logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_job_details_type_id\`) REFERENCES \`job_types\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_application_internal_form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_job_posts_v_parent_idx\` ON \`_job_posts_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_version_company_version_company_logo_idx\` ON \`_job_posts_v\` (\`version_company_logo_id\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_version_job_details_version_job_details_type_idx\` ON \`_job_posts_v\` (\`version_job_details_type_id\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_version_application_version_application_internal_form_idx\` ON \`_job_posts_v\` (\`version_application_internal_form_id\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_version_version_updated_at_idx\` ON \`_job_posts_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_version_version_created_at_idx\` ON \`_job_posts_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_version_version__status_idx\` ON \`_job_posts_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_created_at_idx\` ON \`_job_posts_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_updated_at_idx\` ON \`_job_posts_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_latest_idx\` ON \`_job_posts_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`_job_posts_v_texts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_job_posts_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_job_posts_v_texts_order_parent_idx\` ON \`_job_posts_v_texts\` (\`order\`,\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_job_posts_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`job_roles_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_job_posts_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`job_roles_id\`) REFERENCES \`job_roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_job_posts_v_rels_order_idx\` ON \`_job_posts_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_rels_parent_idx\` ON \`_job_posts_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_rels_path_idx\` ON \`_job_posts_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_job_posts_v_rels_job_roles_id_idx\` ON \`_job_posts_v_rels\` (\`job_roles_id\`);`)
  await db.run(sql`CREATE TABLE \`job_types\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft'
  );
  `)
  await db.run(sql`CREATE INDEX \`job_types_updated_at_idx\` ON \`job_types\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`job_types_created_at_idx\` ON \`job_types\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`job_types__status_idx\` ON \`job_types\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_job_types_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_title\` text,
  	\`version_slug\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`job_types\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_job_types_v_parent_idx\` ON \`_job_types_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_job_types_v_version_version_updated_at_idx\` ON \`_job_types_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_types_v_version_version_created_at_idx\` ON \`_job_types_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_types_v_version_version__status_idx\` ON \`_job_types_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_job_types_v_created_at_idx\` ON \`_job_types_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_types_v_updated_at_idx\` ON \`_job_types_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_types_v_latest_idx\` ON \`_job_types_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`job_roles\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft'
  );
  `)
  await db.run(sql`CREATE INDEX \`job_roles_updated_at_idx\` ON \`job_roles\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`job_roles_created_at_idx\` ON \`job_roles\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`job_roles__status_idx\` ON \`job_roles\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_job_roles_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_title\` text,
  	\`version_slug\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`job_roles\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_job_roles_v_parent_idx\` ON \`_job_roles_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_job_roles_v_version_version_updated_at_idx\` ON \`_job_roles_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_roles_v_version_version_created_at_idx\` ON \`_job_roles_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_roles_v_version_version__status_idx\` ON \`_job_roles_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_job_roles_v_created_at_idx\` ON \`_job_roles_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_roles_v_updated_at_idx\` ON \`_job_roles_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_job_roles_v_latest_idx\` ON \`_job_roles_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`salary_range\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`salary_type\` text DEFAULT 'range',
  	\`salary_min\` numeric,
  	\`salary_max\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft'
  );
  `)
  await db.run(sql`CREATE INDEX \`salary_range_updated_at_idx\` ON \`salary_range\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`salary_range_created_at_idx\` ON \`salary_range\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`salary_range__status_idx\` ON \`salary_range\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_salary_range_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_salary_type\` text DEFAULT 'range',
  	\`version_salary_min\` numeric,
  	\`version_salary_max\` numeric,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`salary_range\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_salary_range_v_parent_idx\` ON \`_salary_range_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_salary_range_v_version_version_updated_at_idx\` ON \`_salary_range_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_salary_range_v_version_version_created_at_idx\` ON \`_salary_range_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_salary_range_v_version_version__status_idx\` ON \`_salary_range_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_salary_range_v_created_at_idx\` ON \`_salary_range_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_salary_range_v_updated_at_idx\` ON \`_salary_range_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_salary_range_v_latest_idx\` ON \`_salary_range_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`search\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`priority\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`search_updated_at_idx\` ON \`search\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`search_created_at_idx\` ON \`search\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`search_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`blogs_id\` integer,
  	\`tags_id\` integer,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`search\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`blogs_id\`) REFERENCES \`blogs\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`tags_id\`) REFERENCES \`tags\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`search_rels_order_idx\` ON \`search_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`search_rels_parent_idx\` ON \`search_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`search_rels_path_idx\` ON \`search_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`search_rels_blogs_id_idx\` ON \`search_rels\` (\`blogs_id\`);`)
  await db.run(sql`CREATE INDEX \`search_rels_tags_id_idx\` ON \`search_rels\` (\`tags_id\`);`)
  await db.run(sql`CREATE INDEX \`search_rels_users_id_idx\` ON \`search_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_checkbox\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`label\` text,
  	\`width\` numeric,
  	\`required\` integer,
  	\`default_value\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_checkbox_order_idx\` ON \`forms_blocks_checkbox\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_checkbox_parent_id_idx\` ON \`forms_blocks_checkbox\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_checkbox_path_idx\` ON \`forms_blocks_checkbox\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_country\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`label\` text,
  	\`width\` numeric,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_country_order_idx\` ON \`forms_blocks_country\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_country_parent_id_idx\` ON \`forms_blocks_country\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_country_path_idx\` ON \`forms_blocks_country\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_email\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`label\` text,
  	\`width\` numeric,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_email_order_idx\` ON \`forms_blocks_email\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_email_parent_id_idx\` ON \`forms_blocks_email\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_email_path_idx\` ON \`forms_blocks_email\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_message\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`message\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_message_order_idx\` ON \`forms_blocks_message\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_message_parent_id_idx\` ON \`forms_blocks_message\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_message_path_idx\` ON \`forms_blocks_message\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_number\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`label\` text,
  	\`width\` numeric,
  	\`default_value\` numeric,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_number_order_idx\` ON \`forms_blocks_number\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_number_parent_id_idx\` ON \`forms_blocks_number\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_number_path_idx\` ON \`forms_blocks_number\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_select_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_select\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_options_order_idx\` ON \`forms_blocks_select_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_options_parent_id_idx\` ON \`forms_blocks_select_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_select\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`label\` text,
  	\`width\` numeric,
  	\`default_value\` text,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_order_idx\` ON \`forms_blocks_select\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_parent_id_idx\` ON \`forms_blocks_select\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_path_idx\` ON \`forms_blocks_select\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`label\` text,
  	\`width\` numeric,
  	\`default_value\` text,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_text_order_idx\` ON \`forms_blocks_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_text_parent_id_idx\` ON \`forms_blocks_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_text_path_idx\` ON \`forms_blocks_text\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_textarea\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`label\` text,
  	\`width\` numeric,
  	\`default_value\` text,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_textarea_order_idx\` ON \`forms_blocks_textarea\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_textarea_parent_id_idx\` ON \`forms_blocks_textarea\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_textarea_path_idx\` ON \`forms_blocks_textarea\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_upload\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`label\` text,
  	\`size\` numeric DEFAULT 5 NOT NULL,
  	\`width\` numeric,
  	\`multiple\` integer DEFAULT false NOT NULL,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_upload_order_idx\` ON \`forms_blocks_upload\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_upload_parent_id_idx\` ON \`forms_blocks_upload\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_upload_path_idx\` ON \`forms_blocks_upload\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_emails\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`email_to\` text,
  	\`cc\` text,
  	\`bcc\` text,
  	\`reply_to\` text,
  	\`email_from\` text,
  	\`subject\` text DEFAULT 'You''''ve received a new message.' NOT NULL,
  	\`message\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_emails_order_idx\` ON \`forms_emails\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_emails_parent_id_idx\` ON \`forms_emails\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`submit_button_label\` text,
  	\`confirmation_type\` text DEFAULT 'message',
  	\`confirmation_message\` text,
  	\`redirect_url\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_updated_at_idx\` ON \`forms\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`forms_created_at_idx\` ON \`forms\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`form_submissions_submission_data\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`field\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`form_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`form_submissions_submission_data_order_idx\` ON \`form_submissions_submission_data\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`form_submissions_submission_data_parent_id_idx\` ON \`form_submissions_submission_data\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`form_submissions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`form_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`form_submissions_form_idx\` ON \`form_submissions\` (\`form_id\`);`)
  await db.run(sql`CREATE INDEX \`form_submissions_updated_at_idx\` ON \`form_submissions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`form_submissions_created_at_idx\` ON \`form_submissions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`form_submissions_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`media_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`form_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`form_submissions_rels_order_idx\` ON \`form_submissions_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`form_submissions_rels_parent_idx\` ON \`form_submissions_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`form_submissions_rels_path_idx\` ON \`form_submissions_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`form_submissions_rels_media_id_idx\` ON \`form_submissions_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`pages_id\` integer,
  	\`blogs_id\` integer,
  	\`tags_id\` integer,
  	\`media_id\` integer,
  	\`job_posts_id\` integer,
  	\`job_types_id\` integer,
  	\`job_roles_id\` integer,
  	\`salary_range_id\` integer,
  	\`search_id\` integer,
  	\`forms_id\` integer,
  	\`form_submissions_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`blogs_id\`) REFERENCES \`blogs\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`tags_id\`) REFERENCES \`tags\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`job_posts_id\`) REFERENCES \`job_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`job_types_id\`) REFERENCES \`job_types\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`job_roles_id\`) REFERENCES \`job_roles\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`salary_range_id\`) REFERENCES \`salary_range\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`search_id\`) REFERENCES \`search\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`forms_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`form_submissions_id\`) REFERENCES \`form_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_blogs_id_idx\` ON \`payload_locked_documents_rels\` (\`blogs_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_tags_id_idx\` ON \`payload_locked_documents_rels\` (\`tags_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_job_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`job_posts_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_job_types_id_idx\` ON \`payload_locked_documents_rels\` (\`job_types_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_job_roles_id_idx\` ON \`payload_locked_documents_rels\` (\`job_roles_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_salary_range_id_idx\` ON \`payload_locked_documents_rels\` (\`salary_range_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_search_id_idx\` ON \`payload_locked_documents_rels\` (\`search_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_forms_id_idx\` ON \`payload_locked_documents_rels\` (\`forms_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_form_submissions_id_idx\` ON \`payload_locked_documents_rels\` (\`form_submissions_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`navbarLinks\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`type\` text DEFAULT 'reference',
  	\`new_tab\` integer,
  	\`icon_id\` integer,
  	\`label\` text,
  	\`url\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`navbarMenu\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`navbarLinks_order_idx\` ON \`navbarLinks\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`navbarLinks_parent_id_idx\` ON \`navbarLinks\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`navbarLinks_icon_idx\` ON \`navbarLinks\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`navbarMenu\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`group\` integer DEFAULT false,
  	\`menu_link_type\` text DEFAULT 'reference',
  	\`menu_link_new_tab\` integer,
  	\`menu_link_icon_id\` integer,
  	\`menu_link_label\` text,
  	\`menu_link_url\` text,
  	\`menu_link_group_group_title\` text,
  	FOREIGN KEY (\`menu_link_icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`navbarMenu_order_idx\` ON \`navbarMenu\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`navbarMenu_parent_id_idx\` ON \`navbarMenu\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`navbarMenu_menu_link_menu_link_icon_idx\` ON \`navbarMenu\` (\`menu_link_icon_id\`);`)
  await db.run(sql`CREATE TABLE \`footerLinks\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`type\` text DEFAULT 'reference',
  	\`new_tab\` integer,
  	\`icon_id\` integer,
  	\`label\` text,
  	\`url\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`FooterMenu\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`footerLinks_order_idx\` ON \`footerLinks\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`footerLinks_parent_id_idx\` ON \`footerLinks\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`footerLinks_icon_idx\` ON \`footerLinks\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`FooterMenu\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`group\` integer DEFAULT false,
  	\`menu_link_type\` text DEFAULT 'reference',
  	\`menu_link_new_tab\` integer,
  	\`menu_link_icon_id\` integer,
  	\`menu_link_label\` text,
  	\`menu_link_url\` text,
  	\`menu_link_group_group_title\` text,
  	FOREIGN KEY (\`menu_link_icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`FooterMenu_order_idx\` ON \`FooterMenu\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`FooterMenu_parent_id_idx\` ON \`FooterMenu\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`FooterMenu_menu_link_menu_link_icon_idx\` ON \`FooterMenu\` (\`menu_link_icon_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_footer_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`platform\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_footer_social_links_order_idx\` ON \`site_settings_footer_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_footer_social_links_parent_id_idx\` ON \`site_settings_footer_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`general_title\` text NOT NULL,
  	\`general_description\` text NOT NULL,
  	\`general_favicon_url_id\` integer NOT NULL,
  	\`general_og_image_url_id\` integer NOT NULL,
  	\`general_currency\` text DEFAULT 'usd' NOT NULL,
  	\`navbar_logo_image_url_id\` integer NOT NULL,
  	\`navbar_logo_height\` numeric,
  	\`navbar_logo_width\` numeric,
  	\`footer_logo_image_url_id\` integer NOT NULL,
  	\`footer_logo_height\` numeric,
  	\`footer_logo_width\` numeric,
  	\`footer_logo_description\` text,
  	\`footer_copyright\` text,
  	\`monetization_ad_sense_id\` text,
  	\`monetization_measurement_id\` text,
  	\`theme_settings_light_mode_background\` text DEFAULT '#ffffff' NOT NULL,
  	\`theme_settings_light_mode_foreground\` text DEFAULT '#0a0a0a' NOT NULL,
  	\`theme_settings_light_mode_primary\` text DEFAULT '#9372f7' NOT NULL,
  	\`theme_settings_light_mode_primary_foreground\` text DEFAULT '#f1f5f9' NOT NULL,
  	\`theme_settings_light_mode_card\` text DEFAULT '#ffffff' NOT NULL,
  	\`theme_settings_light_mode_card_foreground\` text DEFAULT '#0a0a0a' NOT NULL,
  	\`theme_settings_light_mode_popover\` text DEFAULT '#ffffff' NOT NULL,
  	\`theme_settings_light_mode_popover_foreground\` text DEFAULT '#0a0a0a' NOT NULL,
  	\`theme_settings_light_mode_secondary\` text DEFAULT '#e2e8f0' NOT NULL,
  	\`theme_settings_light_mode_secondary_foreground\` text DEFAULT '#1e293b' NOT NULL,
  	\`theme_settings_light_mode_muted\` text DEFAULT '#e2e8f0' NOT NULL,
  	\`theme_settings_light_mode_muted_foreground\` text DEFAULT '#6b7280' NOT NULL,
  	\`theme_settings_light_mode_accent\` text DEFAULT '#e2e8f0' NOT NULL,
  	\`theme_settings_light_mode_accent_foreground\` text DEFAULT '#1e293b' NOT NULL,
  	\`theme_settings_light_mode_destructive\` text DEFAULT '#ef4444' NOT NULL,
  	\`theme_settings_light_mode_destructive_foreground\` text DEFAULT '#f1f5f9' NOT NULL,
  	\`theme_settings_light_mode_border\` text DEFAULT '#d1d5db' NOT NULL,
  	\`theme_settings_light_mode_input\` text DEFAULT '#d1d5db' NOT NULL,
  	\`theme_settings_light_mode_ring\` text DEFAULT '#9372f7' NOT NULL,
  	\`theme_settings_dark_mode_background\` text DEFAULT '#0a0a0a' NOT NULL,
  	\`theme_settings_dark_mode_foreground\` text DEFAULT '#f1f5f9' NOT NULL,
  	\`theme_settings_dark_mode_primary\` text DEFAULT '#7158e2' NOT NULL,
  	\`theme_settings_dark_mode_primary_foreground\` text DEFAULT '#f1f5f9' NOT NULL,
  	\`theme_settings_dark_mode_card\` text DEFAULT '#0a0a0a' NOT NULL,
  	\`theme_settings_dark_mode_card_foreground\` text DEFAULT '#f1f5f9' NOT NULL,
  	\`theme_settings_dark_mode_popover\` text DEFAULT '#0a0a0a' NOT NULL,
  	\`theme_settings_dark_mode_popover_foreground\` text DEFAULT '#f1f5f9' NOT NULL,
  	\`theme_settings_dark_mode_secondary\` text DEFAULT '#232c3a' NOT NULL,
  	\`theme_settings_dark_mode_secondary_foreground\` text DEFAULT '#f1f5f9' NOT NULL,
  	\`theme_settings_dark_mode_muted\` text DEFAULT '#232c3a' NOT NULL,
  	\`theme_settings_dark_mode_muted_foreground\` text DEFAULT '#a1a8c0' NOT NULL,
  	\`theme_settings_dark_mode_accent\` text DEFAULT '#232c3a' NOT NULL,
  	\`theme_settings_dark_mode_accent_foreground\` text DEFAULT '#f1f5f9' NOT NULL,
  	\`theme_settings_dark_mode_destructive\` text DEFAULT '#752626' NOT NULL,
  	\`theme_settings_dark_mode_destructive_foreground\` text DEFAULT '#f1f5f9' NOT NULL,
  	\`theme_settings_dark_mode_border\` text DEFAULT '#232c3a' NOT NULL,
  	\`theme_settings_dark_mode_input\` text DEFAULT '#232c3a' NOT NULL,
  	\`theme_settings_dark_mode_ring\` text DEFAULT '#7158e2' NOT NULL,
  	\`theme_settings_fonts_display_type\` text DEFAULT 'googleFont' NOT NULL,
  	\`theme_settings_fonts_display_custom_font_id\` integer,
  	\`theme_settings_fonts_display_remote_font\` text DEFAULT 'https://fonts.googleapis.com/css2?family=Chewy&display=swap',
  	\`theme_settings_fonts_display_font_name\` text DEFAULT 'Chewy',
  	\`theme_settings_fonts_body_type\` text DEFAULT 'googleFont' NOT NULL,
  	\`theme_settings_fonts_body_custom_font_id\` integer,
  	\`theme_settings_fonts_body_remote_font\` text DEFAULT 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
  	\`theme_settings_fonts_body_font_name\` text DEFAULT 'Roboto',
  	\`theme_settings_radius\` text DEFAULT 'none' NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`general_favicon_url_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`general_og_image_url_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`navbar_logo_image_url_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`footer_logo_image_url_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`theme_settings_fonts_display_custom_font_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`theme_settings_fonts_body_custom_font_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_general_general_favicon_url_idx\` ON \`site_settings\` (\`general_favicon_url_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_general_general_og_image_url_idx\` ON \`site_settings\` (\`general_og_image_url_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_navbar_logo_navbar_logo_image_url_idx\` ON \`site_settings\` (\`navbar_logo_image_url_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_footer_logo_footer_logo_image_url_idx\` ON \`site_settings\` (\`footer_logo_image_url_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_theme_settings_fonts_display_theme_settings_fonts_display_custom_font_idx\` ON \`site_settings\` (\`theme_settings_fonts_display_custom_font_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_theme_settings_fonts_body_theme_settings_fonts_body_custom_font_idx\` ON \`site_settings\` (\`theme_settings_fonts_body_custom_font_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_texts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_texts_order_parent_idx\` ON \`site_settings_texts\` (\`order\`,\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_rels_order_idx\` ON \`site_settings_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_rels_parent_idx\` ON \`site_settings_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_rels_path_idx\` ON \`site_settings_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_rels_pages_id_idx\` ON \`site_settings_rels\` (\`pages_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_role\`;`)
  await db.run(sql`DROP TABLE \`users_social_links\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_details\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_form_block\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_hero_section_images\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_posts\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_companies_company_logos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_companies\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content_content_details\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_image_block\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team_team\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_team\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_values_values\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_values\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_terms_or_privacy\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_featured_jobs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_disqus_comments\`;`)
  await db.run(sql`DROP TABLE \`pages_breadcrumbs\`;`)
  await db.run(sql`DROP TABLE \`pages\`;`)
  await db.run(sql`DROP TABLE \`pages_rels\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_details\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_list\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_form_block\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero_hero_section_images\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_blog_posts\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_companies_company_logos\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_companies\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_content_content_details\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_content\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_image_block\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_team_team\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_team\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_values_values\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_values\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_terms_or_privacy\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_featured_jobs\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_disqus_comments\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_breadcrumbs\`;`)
  await db.run(sql`DROP TABLE \`_pages_v\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_rels\`;`)
  await db.run(sql`DROP TABLE \`blogs\`;`)
  await db.run(sql`DROP TABLE \`blogs_rels\`;`)
  await db.run(sql`DROP TABLE \`_blogs_v\`;`)
  await db.run(sql`DROP TABLE \`_blogs_v_rels\`;`)
  await db.run(sql`DROP TABLE \`tags\`;`)
  await db.run(sql`DROP TABLE \`_tags_v\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`job_posts\`;`)
  await db.run(sql`DROP TABLE \`job_posts_texts\`;`)
  await db.run(sql`DROP TABLE \`job_posts_rels\`;`)
  await db.run(sql`DROP TABLE \`_job_posts_v\`;`)
  await db.run(sql`DROP TABLE \`_job_posts_v_texts\`;`)
  await db.run(sql`DROP TABLE \`_job_posts_v_rels\`;`)
  await db.run(sql`DROP TABLE \`job_types\`;`)
  await db.run(sql`DROP TABLE \`_job_types_v\`;`)
  await db.run(sql`DROP TABLE \`job_roles\`;`)
  await db.run(sql`DROP TABLE \`_job_roles_v\`;`)
  await db.run(sql`DROP TABLE \`salary_range\`;`)
  await db.run(sql`DROP TABLE \`_salary_range_v\`;`)
  await db.run(sql`DROP TABLE \`search\`;`)
  await db.run(sql`DROP TABLE \`search_rels\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_checkbox\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_country\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_email\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_message\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_number\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_select_options\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_select\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_text\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_textarea\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_upload\`;`)
  await db.run(sql`DROP TABLE \`forms_emails\`;`)
  await db.run(sql`DROP TABLE \`forms\`;`)
  await db.run(sql`DROP TABLE \`form_submissions_submission_data\`;`)
  await db.run(sql`DROP TABLE \`form_submissions\`;`)
  await db.run(sql`DROP TABLE \`form_submissions_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
  await db.run(sql`DROP TABLE \`navbarLinks\`;`)
  await db.run(sql`DROP TABLE \`navbarMenu\`;`)
  await db.run(sql`DROP TABLE \`footerLinks\`;`)
  await db.run(sql`DROP TABLE \`FooterMenu\`;`)
  await db.run(sql`DROP TABLE \`site_settings_footer_social_links\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
  await db.run(sql`DROP TABLE \`site_settings_texts\`;`)
  await db.run(sql`DROP TABLE \`site_settings_rels\`;`)
}
